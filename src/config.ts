import {PlatformConfig} from 'homebridge';

export interface SwitchHttpPlatformConfig extends PlatformConfig {
  urlBase?: string;
  urlPath?: string;
}