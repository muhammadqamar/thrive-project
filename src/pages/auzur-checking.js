import React, { useEffect, useState } from 'react';
import { config } from '../../config/azure.config';
import { PublicClientApplication } from '@azure/msal-browser';
import axios from 'axios';

const AuzurChecking = () => {
  const [azureAuth, setAzureAuth] = useState(false);
  const [azureAuthData, setAzureAuthData] = useState([]);
  const [azureAuthToken, setAzureAuthToken] = useState([]);
  const publicClientApplication = new PublicClientApplication({
    auth: {
      clientId: config.appId,
      authority: config.authority,
      redirectUri: config.redirectUri,
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: true,
    },
  });

  const azureLogin = async () => {
    const log_data = await publicClientApplication.loginPopup({
      scopes: config.scope,
      prompt: 'select_account',
    });

    console.log('log_data', log_data);
    if (log_data?.accessToken) {
      setAzureAuthToken(log_data.accessToken);
    }

    setAzureAuth(true);
  };

  const azureLogout = () => {
    publicClientApplication.logout();
    setAzureAuth(false);
  };

  useEffect(() => {
    setAzureAuthData();
    publicClientApplication
      .handleRedirectPromise()
      .then((res) => {
        const logged_user = publicClientApplication.getAllAccounts();
        if (logged_user.length === 1) {
          setAzureAuthData(logged_user);
          setAzureAuth(true);
        }
        console.log(logged_user);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getData = () => {
    // console.log('azureAuthToken', azureAuthToken);
    axios
      .get('https://graph.microsoft.com/v1.0/me/onenote/notebooks', {
        headers: {
          Authorization: `Bearer ${azureAuthToken}`,
        },
      })
      .then((_data) => {
        console.log('data', _data);
      })
      .catch((err) => {
        console.log('Err:', err);
      });
  };
  const createData = () => {
    console.log('azureAuthToken', azureAuthToken);
    axios
      .post(
        'https://graph.microsoft.com/v1.0/me/onenote/notebooks',
        {
          displayName: 'My Private notebook',
        },
        {
          headers: {
            Authorization: `Bearer ${azureAuthToken}`,
          },
        }
      )
      .then((_data) => {
        console.log('data', _data);
      })
      .catch((err) => {
        console.log('Err:', err);
      });
  };
  return (
    <div>
      <h1>AuzurChecking</h1>
      {azureAuth ? (
        <div>
          <p>logged user Name: {azureAuthData && azureAuthData[0]?.name}</p>
          <p>Email: {azureAuthData && azureAuthData[0]?.username}</p>
          <button
            style={{
              marginLeft: '12px',
            }}
            onClick={() => {
              azureLogout();
            }}
          >
            Azure Logout
          </button>
          <button
            style={{
              marginLeft: '12px',
            }}
            onClick={() => {
              getData();
            }}
          >
            Get Data
          </button>
          <button
            style={{
              marginLeft: '12px',
            }}
            onClick={() => {
              createData();
            }}
          >
            Create
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            azureLogin();
          }}
        >
          Azure Login
        </button>
      )}
    </div>
  );
};

export default AuzurChecking;
