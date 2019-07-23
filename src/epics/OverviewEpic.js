import {ofType} from "redux-observable";
import Types from '../actions/Types';
import {map, mergeMap} from "rxjs/operators";
import {XMLHttpRequest} from 'xmlhttprequest';
import {ajax} from 'rxjs/ajax';

const fetchUserFulfilled = payload => ({type: 'portfolio/SUCCESS_OVERVIEW', payload});


const getheaders = {
        'Accept': 'application/json',
        'content-type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': 'http://localhost:3000, *',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
        'x-nab-accesstoken': 'eyJ0eXAiOiJEQVNlcnZpY2VUb2tlbiIsImFsZyI6IlJTMjU2Iiwia2lkIjoieXNRd3p1bEtsVmFtMmxXa1FjUHJHNlRlMlZZIiwieDV0IjoibnhlNnlBNnVCalh1a0lTRUZBX0lpdjRZTW9nIn0.ew0KICAianRpIjogIjIxMTk3MENDLUIyQzEtQTBEOC1GRDQzLTI0MTNFRTYzRDcyRiIsDQogICJpc3MiOiAiaHR0cHM6Ly9kZXYzLm5hYi5jb20uYXUvZGEiLA0KICAidmVyIjogIjIuMCIsDQogICJzdWIiOiAiZTpqYndlcmU6ODAxODQ2OCIsDQogICJleHAiOiAxNTQwMjc0NjU5LA0KICAibmJmIjogMTU0MDE4ODI1OSwNCiAgImlhdCI6IDE1NDAxODgyNTksDQogICJhY3IiOiAyLA0KICAiYW1yIjogInVzZXJuYW1lUGFzc3dvcmQiLA0KICAidHRpIjogMzYwMCwNCiAgInVzciI6ICI4MDE4NDY4IiwNCiAgIm1vZGlkIjogImQ3NjcxNTkxLTg3ZTMtNDU2NS1iMzc0LWUwYTYyNmVlZGVlNiIsDQogICJuYXIiOiAiU1RBRkYiLA0KICAic2VjZWFzZWlkIjogIjE5OTA3MiIsDQogICJ1aWQiOiAiODAxODQ2OCINCn0=.oK_alHC2-nwa77O8CNSkEjA9PAaoGPdksHZybvhk7iEynp88v9AZG2ZkYBv8rITBBCU5e_Uj-oEVGqUnjZiVfRwtzYVXIx6rs2hWRWNo0yYQ2tsXZSfQ59IJUht7fl3SxH2EOIcNWbJkdHPbZFYG7hIKSNfbUkzkpN659TLPPUdwhm2JrdlvpVRRkYuOA44GaGthsUkEg7_nB7CzV0NtrcunmygQeKyCvqujCEVcEvSAOHG8lUy_L5VvkcQFCs7PcuMvJziaU0HRnK0K2fIKvGkcOPOHgBW0gKSa-PET-JTxF9teF6alD-ifmtTqlcLqsRhlkJvk_SJZuQbWIStcXg',
        'x-correlationId': 'ff692bef-42bf-4910-aff7-b3383a36ecb1'
}

function createXHR() {
    return new XMLHttpRequest();
}


const url_1 = 'https://reqres.in/api/users?page=2';
const url_2 = 'http://localhost:9090/v1/jbwere/clients/self/portfolios/changes';

const overviewEpic = action$ => action$.pipe(

    ofType(Types['portfolio/SUBMIT_OVERVIEW']),

    mergeMap(action => {
            console.log('overviewEpic', action.payload.clientToken, action.payload.selectedAccounts);

            //  return  ajax.getJSON(`https://reqres.in/api/users?page=2`)

            /* return ajax({
                 createXHR,
                 url: 'http://localhost:9090/v1/jbwere/clients/self/portfolios/changes',
                 method: 'GET',
                 crossDomain: true,
                 withCredentials: false,
                 headers: {
                     'cache-control': 'no-cache',
                     Connection: 'keep-alive',
                     'accept-encoding': 'gzip, deflate',
                     Host: 'localhost:9090',
                     'Cache-Control': 'no-cache',
                     'Access-Control-Allow-Origin': '*',
                     'x-correlationId': 'ff692bef-42bf-4910-aff7-b3383a36ecb1',
                     'x-nab-accesstoken': 'eyJ0eXAiOiJEQVNlcnZpY2VUb2tlbiIsImFsZyI6IlJTMjU2Iiwia2lkIjoieXNRd3p1bEtsVmFtMmxXa1FjUHJHNlRlMlZZIiwieDV0IjoibnhlNnlBNnVCalh1a0lTRUZBX0lpdjRZTW9nIn0.ew0KICAianRpIjogIjIxMTk3MENDLUIyQzEtQTBEOC1GRDQzLTI0MTNFRTYzRDcyRiIsDQogICJpc3MiOiAiaHR0cHM6Ly9kZXYzLm5hYi5jb20uYXUvZGEiLA0KICAidmVyIjogIjIuMCIsDQogICJzdWIiOiAiZTpqYndlcmU6ODAxODQ2OCIsDQogICJleHAiOiAxNTQwMjc0NjU5LA0KICAibmJmIjogMTU0MDE4ODI1OSwNCiAgImlhdCI6IDE1NDAxODgyNTksDQogICJhY3IiOiAyLA0KICAiYW1yIjogInVzZXJuYW1lUGFzc3dvcmQiLA0KICAidHRpIjogMzYwMCwNCiAgInVzciI6ICI4MDE4NDY4IiwNCiAgIm1vZGlkIjogImQ3NjcxNTkxLTg3ZTMtNDU2NS1iMzc0LWUwYTYyNmVlZGVlNiIsDQogICJuYXIiOiAiU1RBRkYiLA0KICAic2VjZWFzZWlkIjogIjE5OTA3MiIsDQogICJ1aWQiOiAiODAxODQ2OCINCn0=.oK_alHC2-nwa77O8CNSkEjA9PAaoGPdksHZybvhk7iEynp88v9AZG2ZkYBv8rITBBCU5e_Uj-oEVGqUnjZiVfRwtzYVXIx6rs2hWRWNo0yYQ2tsXZSfQ59IJUht7fl3SxH2EOIcNWbJkdHPbZFYG7hIKSNfbUkzkpN659TLPPUdwhm2JrdlvpVRRkYuOA44GaGthsUkEg7_nB7CzV0NtrcunmygQeKyCvqujCEVcEvSAOHG8lUy_L5VvkcQFCs7PcuMvJziaU0HRnK0K2fIKvGkcOPOHgBW0gKSa-PET-JTxF9teF6alD-ifmtTqlcLqsRhlkJvk_SJZuQbWIStcXg',
                     'Content-Type': 'application/json;charset=UTF-8',
                     Accept: 'application/json'
                 }
             })
                 */
            return ajax.get(url_2, getheaders)
                .pipe(
                    map(data => fetchUserFulfilled(data.response))
                )
        }
    )
);


export {overviewEpic};
