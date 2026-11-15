// For trying the game as two children on one computer: ?p=2 in the address keeps a separate garden
// and a separate family membership in the same browser. Without it nothing changes.
export const PROFILE = (new URLSearchParams(location.search).get('p') || '').replace(/[^\w-]/g, '').slice(0, 12);
export const storeKey = (k: string) => PROFILE ? k + '-p' + PROFILE : k;
