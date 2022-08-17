import {Injectable} from '@angular/core';
import {AppMeasureItem} from 'src/app/include/app/base/classes/app-measure-item';
import {AppScriptMeasureContentItem} from 'src/app/include/app/base/classes/app-script-measure-content-item';

import {RcvLocationResponseItem} from 'src/app/include/rcv/classes/rcv-location-response-item';
import {RcvLocationTypeResponseItem} from 'src/app/include/rcv/classes/rcv-location-type-response-item';
import {RcvMonitoringObjectResponseItem} from 'src/app/include/rcv/classes/rcv-monitoring-object-response-item';
import {RcvNodeResponseItem} from 'src/app/include/rcv/classes/rcv-node-response-item';
import {RcvNodeSettingsResponseItem} from 'src/app/include/rcv/classes/rcv-node-settings-response-item';
import {RcvScriptResponseItem} from 'src/app/include/rcv/classes/rcv-script-response-item';
import {RcvUserResponseItem} from 'src/app/include/rcv/classes/rcv-user-response-item';
import {RcvWorkspaceContentResponseItem} from 'src/app/include/rcv/classes/rcv-workspace-content-response-item';
import {RcvWorkspaceResponseItem} from 'src/app/include/rcv/classes/rcv-workspace-response-item';
import {RcvGroupResponseItem} from 'src/app/include/rcv/classes/rec-group-response-item';

import {TestGroupService} from './test-group.service';
import {TestLocationTypeService} from './test-location-type.service';
import {TestLocationService} from './test-location.service';
import {TestMonitoringObjectService} from './test-monitoring-object.service';
import {TestNodeService} from './test-node.service';
import {TestScriptMeasureService} from './test-script-measure.service';
import {TestScriptService} from './test-script.service';
import {TestUserService} from './test-user.service';
import {TestWebPreviewService} from './test-web-preview.service';
import {TestWorkspaceService} from './test-workspace.service';

@Injectable
({
  providedIn: 'root'
})
export class CrossTestService
{
  constructor (private group:TestGroupService,
    private locationType:TestLocationTypeService,
    private location:TestLocationService,
    private mo:TestMonitoringObjectService,
    private node:TestNodeService,
    private user:TestUserService,
    private webPreview:TestWebPreviewService,
    private workspace:TestWorkspaceService,
    private script:TestScriptService,
    private scriptMeasure:TestScriptMeasureService)
  {
  }

  public async testSlms7578Async (): Promise<boolean>
  {
  const grpId:number = await this.group.createGroupAsync();
  const locId:number = await this.location.createLocationAsync('tgu 1','tgu test location 1');
  const locId2:number = await this.location.bindGroupAsync(locId,grpId);
  const locs1:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();
  const res:boolean = await this.group.deleteGroupAsync(grpId);
  const locs2:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();

    return true;
  }

  public async testSlms7576Async (): Promise<boolean>
  {
  const grps1:RcvGroupResponseItem[] = await this.group.getAllAccesssibleGroupsAsync();
  const grpId:number = await this.group.createGroupAsync();
  const grps2:RcvGroupResponseItem[] = await this.group.getAllAccesssibleGroupsAsync();

  const locs1:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();
  const locId:number = await this.location.createChildLocationWithGroupAsync('tgu 1','tgu test location 1',grpId);
  
  const locs2:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();
  let res:boolean = await this.location.deleteLocationAsync(locId);

  const grps3:RcvGroupResponseItem[] = await this.group.getAllAccesssibleGroupsAsync();

    res = await this.group.deleteGroupAsync(grpId);

    return true;
  }

  public async testSlms7596Async (): Promise<boolean>
  {
  const all:RcvMonitoringObjectResponseItem[] = await this.mo.getAllObjectsAsync();
  const byZeroNode:RcvMonitoringObjectResponseItem[] = all.filter(e => (e.nodeID ?? -1) == 0);
    return true;
  }

  public async testSlms7587Async (): Promise<boolean>
  {
  const bUpdateZero:boolean = await this.node.updateZeroNodeAsync();
  
  const allNodes:RcvNodeResponseItem[] = await this.node.getAllNodesAsync();
  const ids:number[] = allNodes.map(e => e.nodeID);

  const roNodes:RcvNodeResponseItem[] = allNodes.filter(e => e.isReadOnly);

  const res = await this.node.getSettingsAsync(0);
  const res2 = await this.node.getSettingsAsync(999);

  const allNodeSettings:RcvNodeSettingsResponseItem[] = await this.node.getSettingsOfAllNodesAsync(ids);
  const roNodeSettings:RcvNodeSettingsResponseItem[] = allNodeSettings.filter(e => e.isReadOnly);

    return true;
  }

  public async testSlms7632Async (): Promise<boolean>
  {
  const usr:RcvUserResponseItem|null = await this.user.createNewUserAsync('usrtgu1','tgu user 1','mylongpassword');
    return true;
  }

  public async testSlms7680Async (): Promise<boolean>
  {
  const locType:RcvLocationTypeResponseItem|null = await this.locationType.createLocationTypeAsync2('tgu loctype 1',
    'tgu test loca type 1.');
  const locTypeId:number = locType?.locationTypeID ?? -1;

  const loc:RcvLocationResponseItem|null = await this.location.createLocationAsync3('tgu loc 1','tgu test loc 1.',locTypeId);
  const locId:number = loc?.locationID ?? -1;

  const locTypes:RcvLocationTypeResponseItem[] = await this.locationType.getAllLocationTypesAsync();
  const locs:RcvLocationResponseItem[] = await this.location.getAllLocationsAsync();

  const bDeleteLoc = await this.location.deleteLocationAsync(locId);
  const bDeleteLocType = await this.locationType.deleteLocationTypeAsync(locTypeId);

    return true;
  }

  public async testSlms7657Async (): Promise<boolean>
  {
  const res:RcvMonitoringObjectResponseItem[] = await this.mo.getAllObjectsAsync();
  //const allMpegs:RcvMonitoringObjectResponseItem[] = res.filter(e => e.hasMosaic && e.hasPreview && e.objectType == 'mpegService');
  //const mpegsWithUrl:RcvMonitoringObjectResponseItem[] =  allMpegs.filter(e => (e.url ?? '').trim().length);

  const wss:RcvWorkspaceResponseItem[] = await this.workspace.getAllWorkspacesAsync();
  const ws = wss.find(e => e.name == 'Node MP 7  mpeg ts+HLS');
    if (!ws) return false;

  const mos:Set<string> = new Set<string>();

  const contentWorkspace:RcvWorkspaceContentResponseItem|null = await this.workspace.getContentAsync(ws.workspaceID);
    contentWorkspace?.workspaceWidget.forEach(contentWidget =>
    {
      if (contentWidget.widget)
      {
        contentWidget.widget.widgetDataSource.analyzeMonitoringObjectList.forEach(amo =>
        {
        const mo:string = (amo.monitoringObjectID ?? '').trim();
          if ((mo.length > 0) && !mos.has(mo)) mos.add(mo);
        });
      }
    });

  const targets:RcvMonitoringObjectResponseItem[] = res.filter(e => mos.has(e.monitoringObjectID));
  const failed:Map<string,{mo:RcvMonitoringObjectResponseItem,err:any}> = new Map<string,{mo:RcvMonitoringObjectResponseItem,err:any}>();
    for (const target of targets)
    {
    const res = await this.webPreview.getPreviewUrlAsync(target.monitoringObjectID);
      if (!res.result)
      {
        if (res.haveFailure)
          failed.set(target.monitoringObjectID,{mo:target, err:res.failure});
        else if (res.haveError)
          failed.set(target.monitoringObjectID,{mo:target, err:res.error});
        else if (res.haveHttpResult && res.http?.haveError)
          failed.set(target.monitoringObjectID,{mo:target, err:res.http.error});
      }
    }

    return true;
  }

  public async testMultiplePinsAsync (): Promise<boolean>
  {
  const DeleteMeasures:boolean = false;

  const scripts:RcvScriptResponseItem[] = await this.script.getAllScriptsAsync();
  const targetScript:RcvScriptResponseItem|undefined = scripts.find(e => e.name == 'test-pins.py');
    if (!targetScript) return false;

  const content:AppScriptMeasureContentItem|null = await this.scriptMeasure.getContentAsync(targetScript.scriptID ?? '');
    if (!content) return false; //we must have the obj

    if (content.measures?.length && DeleteMeasures)
    {
    const a = 1; //do something
    }

    if ((content.measures?.length ?? 0) < 1)
    {
      content.measures = [];

      for (let i:number = 0; i < 1000; i++)
      {
      const sIdx:string = i.toString().padStart(3,'0');
      const msr:AppMeasureItem = new AppMeasureItem('tgu msr ' + sIdx,'tgu test measure ' + sIdx);
        msr.columnName = 'mtgu' + sIdx;
        msr.dataType = 'real';
        msr.unit = 'V';
        msr.orderBy = i + 1;

        content.measures.push(msr);
      }

    const content2:AppScriptMeasureContentItem|null = await this.scriptMeasure.setContentAsync(content);
    const lenx = content2?.measures?.length ?? 0; //do something
    }

    return true;
  }

  public async testMultipleIntPinsAsync (): Promise<boolean>
  {
  const DeleteMeasures:boolean = false;

  const scripts:RcvScriptResponseItem[] = await this.script.getAllScriptsAsync();
  const targetScript:RcvScriptResponseItem|undefined = scripts.find(e => e.name == 'test-int-pins.py');
    if (!targetScript) return false;

  const content:AppScriptMeasureContentItem|null = await this.scriptMeasure.getContentAsync(targetScript.scriptID ?? '');
    if (!content) return false; //we must have the obj

    if (content.measures?.length && DeleteMeasures)
    {
    const a = 1; //do something
    }

    if ((content.measures?.length ?? 0) < 1)
    {
      content.measures = [];

      for (let i:number = 0; i < 1000; i++)
      {
      const sIdx:string = i.toString().padStart(3,'0');
      const msr:AppMeasureItem = new AppMeasureItem('tgu msr ' + sIdx,'tgu test measure ' + sIdx);
        msr.columnName = 'mtgu' + sIdx;
        msr.dataType = 'int';
        msr.unit = 'V';
        msr.orderBy = i + 1;

        content.measures.push(msr);
      }

    const content2:AppScriptMeasureContentItem|null = await this.scriptMeasure.setContentAsync(content);
    const lenx = content2?.measures?.length ?? 0; //do something
    }

    return true;
  }

  public async testSlms7851Async (): Promise<boolean>
  {
  const scripts:RcvScriptResponseItem[] = await this.script.getAllScriptsAsync();
  const targetScript:RcvScriptResponseItem|undefined = scripts.find(e => e.name == 'slms7851.py');
    if (!targetScript) return false;

  const content:AppScriptMeasureContentItem|null = await this.scriptMeasure.getContentAsync(targetScript.scriptID ?? '');
    if (!content) return false; //we must have the obj

  const m3:AppMeasureItem|undefined = content.measures.find(e => e.columnName == 'm3');
    if (!m3) return false;

    m3.dataType = 'real';

  const content2:AppScriptMeasureContentItem|null = await this.scriptMeasure.setContentAsync(content);

    return true;
  }

  private async createMeasuresForScriptAsync (sScriptName:string): Promise<boolean>
  {
  const DeleteMeasures:boolean = false;

  const scripts:RcvScriptResponseItem[] = await this.script.getAllScriptsAsync();
  const targetScript:RcvScriptResponseItem|undefined = scripts.find(e => e.name == sScriptName);
    if (!targetScript) return false;

  const content:AppScriptMeasureContentItem|null = await this.scriptMeasure.getContentAsync(targetScript.scriptID ?? '');
    if (!content) return false; //we must have the obj

    if (content.measures?.length && DeleteMeasures)
    {
    const a = 1; //do something
    }

    if ((content.measures?.length ?? 0) < 1)
    {
      content.measures = [];

      for (let i:number = 0; i < 1000; i++)
      {
      const sIdx:string = i.toString().padStart(3,'0');
      const msr:AppMeasureItem = new AppMeasureItem('tgu msr ' + sIdx,'tgu test measure ' + sIdx);
        msr.columnName = 'mtgu' + sIdx;
        msr.dataType = 'int';
        msr.unit = 'V';
        msr.orderBy = i + 1;

        content.measures.push(msr);
      }

    const content2:AppScriptMeasureContentItem|null = await this.scriptMeasure.setContentAsync(content);
    const lenx = content2?.measures?.length ?? 0; //do something
    }

    return true;
  }

  public async testSlms8043Async (): Promise<boolean>
  {
    if (! await this.createMeasuresForScriptAsync('slms8043-1000-00.py')) return false;
    if (! await this.createMeasuresForScriptAsync('slms8043-1000-01.py')) return false;
    if (! await this.createMeasuresForScriptAsync('slms8043-1000-02.py')) return false;
    if (! await this.createMeasuresForScriptAsync('slms8043-1000-03.py')) return false;
    if (! await this.createMeasuresForScriptAsync('slms8043-1000-04.py')) return false;
    if (! await this.createMeasuresForScriptAsync('slms8043-1000-05.py')) return false;
    if (! await this.createMeasuresForScriptAsync('slms8043-1000-06.py')) return false;
    if (! await this.createMeasuresForScriptAsync('slms8043-1000-07.py')) return false;
    if (! await this.createMeasuresForScriptAsync('slms8043-1000-08.py')) return false;
    if (! await this.createMeasuresForScriptAsync('slms8043-1000-09.py')) return false;

    return true;
  }
}