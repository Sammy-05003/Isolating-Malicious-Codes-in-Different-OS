export interface IsolationTechnique {
  id: string;
  name: string;
  description: string;
  os: OperatingSystem;
  effectiveness: number;
  implementation: string;
}

export type OperatingSystem = 'Windows' | 'Linux' | 'MacOS';

export interface SystemResource {
  id: string;
  name: string;
  type: 'CPU' | 'Memory' | 'Disk' | 'Network';
  usage: number;
}