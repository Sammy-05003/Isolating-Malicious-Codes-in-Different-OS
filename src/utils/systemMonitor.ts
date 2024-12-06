import { SystemResource } from '../types';

export const getSystemResources = (): SystemResource[] => {
  return [
    {
      id: 'cpu-1',
      name: 'CPU Usage',
      type: 'CPU',
      usage: Math.random() * 100
    },
    {
      id: 'mem-1',
      name: 'Memory Usage',
      type: 'Memory',
      usage: Math.random() * 100
    },
    {
      id: 'disk-1',
      name: 'Disk I/O',
      type: 'Disk',
      usage: Math.random() * 100
    },
    {
      id: 'net-1',
      name: 'Network Traffic',
      type: 'Network',
      usage: Math.random() * 100
    }
  ];
};