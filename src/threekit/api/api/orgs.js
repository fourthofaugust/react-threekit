import http from '../http';
import { getConnection } from '../connect';

export const fetch = (orgId) =>
  new Promise(async (resolve, reject) => {
    const connectionObj = getConnection();
    if (!(orgId || connectionObj.orgId)?.length)
      return reject('Requires Org Id');

    try {
      const response = await http.orgs.getOrgById(orgId || connectionObj.orgId);
      if (response.status !== 200) return reject(response.data);
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });

export const update = (data) =>
  new Promise(async (resolve, reject) => {
    const connectionObj = getConnection();
    if (!connectionObj.orgId?.length) return reject('Requires Org Id');
    try {
      const response = await http.orgs.updateOrgById(connectionObj.orgId, data);
      if (response.status !== 200) return reject(response.data);
      resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });