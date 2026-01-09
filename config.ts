/**
 * App Configuration
 * 버전 정보를 여기서 관리합니다.
 * 버전 형식: xx.xx.xx (예: 1.0.0, 2.1.5)
 */

export const APP_CONFIG = {
    // 앱 버전 - GitHub Release와 동기화됩니다
    version: '1.0.0',

    // 앱 이름
    appName: 'Nuvio.Note',

    // GitHub 릴리스 정보
    github: {
        owner: 'vansnobal',
        repo: 'nuvio-home',
    },
} as const;

/**
 * macOS Silicon 다운로드 URL 생성
 * 형식: https://github.com/{owner}/{repo}/releases/download/v{version}/{appName}_{version}_aarch64.dmg
 */
export const getMacDownloadUrl = (): string => {
    const { version, appName, github } = APP_CONFIG;
    return `https://github.com/${github.owner}/${github.repo}/releases/download/v${version}/${appName}_${version}_aarch64.dmg`;
};

/**
 * 버전 표시 텍스트 (v 접두사 포함)
 */
export const getVersionDisplay = (): string => {
    return `v${APP_CONFIG.version}`;
};
