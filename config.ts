import { readFileSync, writeFileSync } from 'fs';
import { API } from 'homebridge';

export interface RingPlatformConfig{
  httpUrl?: string;
}

export function updateHomebridgeConfig(
  homebridge: API,
  update: (config: string) => string,
) {
  const configPath = homebridge.user.configPath(),
    config = readFileSync(configPath).toString(),
    updatedConfig = update(config);

  if (config !== updatedConfig) {
    writeFileSync(configPath, updatedConfig);
    return true;
  }

  return false;
}