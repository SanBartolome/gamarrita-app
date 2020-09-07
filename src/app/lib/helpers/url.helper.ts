import { environment } from 'src/environments/environment';

const httpRegex = /^http(s)?:\/\//;

export const prependBackendUrl = (partialUrl: string): string => {
  if (httpRegex.test(partialUrl)) {
    return partialUrl;
  }
  return `${environment.backendUrl}${partialUrl}`;
};
