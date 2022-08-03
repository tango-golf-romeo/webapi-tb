import {Injectable} from '@angular/core';

import {TargetConfig} from 'src/app/classes/target-config';

@Injectable
({
  providedIn: 'root'
})
export class ConfigService
{
private mConfig:TargetConfig = null!;

  constructor ()
  {
    this.load();
  }

  public get config (): TargetConfig
  {
    return this.mConfig;
  }

  private set config (val:TargetConfig|null)
  {
    this.mConfig = val ?? new TargetConfig();
  }

  public load (): TargetConfig
  {
    this.config = TargetConfig.Create();
    return this.config;
  }

  public save (): void
  {
    this.config.save();
  }
}