import { IsolationTechnique } from '../types';

export const isolationTechniques: IsolationTechnique[] = [
  {
    id: 'win-sandbox',
    name: 'Windows Sandbox',
    description: 'Lightweight desktop environment to safely run applications in isolation',
    os: 'Windows',
    effectiveness: 85,
    implementation: `
// Windows Sandbox Configuration
<Configuration>
    <VGpu>Enable</VGpu>
    <Networking>Enable</Networking>
    <MappedFolders>
        <MappedFolder>
            <HostFolder>C:\\SandboxTests</HostFolder>
            <ReadOnly>true</ReadOnly>
        </MappedFolder>
    </MappedFolders>
</Configuration>
    `
  },
  {
    id: 'linux-containers',
    name: 'Linux Containers (LXC)',
    description: 'Operating system-level virtualization for running isolated Linux systems',
    os: 'Linux',
    effectiveness: 90,
    implementation: `
# LXC Container Configuration
lxc.network.type = veth
lxc.network.flags = up
lxc.network.link = lxcbr0
lxc.rootfs = /var/lib/lxc/container/rootfs
lxc.mount.auto = proc sys cgroup
    `
  },
  {
    id: 'macos-sandbox',
    name: 'macOS App Sandbox',
    description: 'Security mechanism that restricts application access to system resources',
    os: 'MacOS',
    effectiveness: 88,
    implementation: `
// App Sandbox Entitlements
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN">
<plist version="1.0">
<dict>
    <key>com.apple.security.app-sandbox</key>
    <true/>
    <key>com.apple.security.files.user-selected.read-only</key>
    <true/>
</dict>
</plist>
    `
  }
];