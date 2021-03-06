const serverURL = 'https://oee-server.appspot.com/api/';
export const environment = {
  production: true,
  version: '0.0.9',
  userAuthenticationURL: `${serverURL}auth`,
  feedURL: `${serverURL}:userId/:channelId/:machineCode/:date/:limit/feed/mobile`,
  userAddURL: `${serverURL}user`,  
  channelListURL: `${serverURL}:userId/channel`,
  machineListURL: `${serverURL}:userId/:channelId/machine/list`,
  userGetDataByTokenPassURL: `${serverURL}user/data`,
  machineChangeStateURL: `${serverURL}machine/state`,
  productionURL: `${serverURL}feed/production/v2`,
  chartGaugeURL: `${serverURL}mobile/chart/gauge/:channelId/:machineCode/:date/:ini/:fin`,
  OeeURL: `${serverURL}feed/oee`,
};