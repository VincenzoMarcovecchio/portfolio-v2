import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markupkj
const Feel = () => {

     const GATSBY_CLIENT_ID = process.env.CLIENT_ID;
     const GATSBY_API_KEY = process.env.API_KEY;
     const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
     const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

     function gisLoaded() {
      tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: GATSBY_CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
      });
      gisInited = true;
      maybeEnableButtons();
    }

    function gapiLoaded() {
      gapi.load('client', initializeGapiClient);
    }
    


          let tokenClient;
          let gapiInited = false;
          let gisInited = false;
    
          typeof window !== undefined && document.getElementById('authorize_button').style.visibility = 'hidden';
          typeof window !== undefined && document.getElementById('signout_button').style.visibility = 'hidden';
    
    
   
    
    
          async function initializeGapiClient() {
            await gapi.client.init({
              apiKey: GATSBY_API_KEY,
              discoveryDocs: [DISCOVERY_DOC],
            });
            gapiInited = true;
            maybeEnableButtons();
          }
    
    

    
    
          function maybeEnableButtons() {
            if (gapiInited && gisInited) {
              typeof window !== undefined && document.getElementById('authorize_button').style.visibility = 'visible';
            }
          }
    
    
          function handleAuthClick() {
            tokenClient.callback = async (resp) => {
              if (resp.error !== undefined) {
                throw (resp);
              }
              typeof window !== undefined && document.getElementById('signout_button').style.visibility = 'visible';
              typeof window !== undefined && document.getElementById('authorize_button').innerText = 'Refresh';
              await listUpcomingEvents();
            };
    
            if (gapi.client.getToken() === null) {
              // Prompt the user to select a Google Account and ask for consent to share their data
              // when establishing a new session.
              tokenClient.requestAccessToken({prompt: 'consent'});
            } else {
              // Skip display of account chooser and consent dialog for an existing session.
              tokenClient.requestAccessToken({prompt: ''});
            }
          }
    
    
          function handleSignoutClick() {
            const token = gapi.client.getToken();
            if (token !== null) {
              google.accounts.oauth2.revoke(token.access_token);
              gapi.client.setToken('');
              typeof window !== undefined && document.getElementById('content').innerText = '';
              typeof window !== undefined && document.getElementById('authorize_button').innerText = 'Authorize';
              typeof window !== undefined && document.getElementById('signout_button').style.visibility = 'hidden';
            }
          }
    
    
          async function listUpcomingEvents() {
            let response;
            try {
              const request = {
                'calendarId': 'primary',
                'timeMin': (new Date()).toISOString(),
                'showDeleted': false,
                'singleEvents': true,
                'maxResults': 10,
                'orderBy': 'startTime',
              };
              response = await gapi.client.calendar.events.list(request);
            } catch (err) {
              typeof window !== undefined && document.getElementById('content').innerText = err.message;
              return;
            }
    
            const events = response.result.items;
            if (!events || events.length == 0) {
              typeof window !== undefined && document.getElementById('content').innerText = 'No events found.';
              return;
            }
            const output = events.reduce(
                (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
                'Events:\n');
                typeof window !== undefined && document.getElementById('content').innerText = output;
          }
    

        

  return (
    <main style={pageStyles}>
    <script  src="https://apis.google.com/js/api.js" onload="gapiLoaded()"></script>
    <script  src="https://accounts.google.com/gsi/client" onload="gisLoaded()"></script>
  
    <p>Google Calendar API Quickstart</p>

    <button id="authorize_button" onclick={()=> handleAuthClick()}>Authorize</button>
    <button id="signout_button" onclick={()=> handleSignoutClick()}>Sign Out</button>

    <pre id="content" style="white-space: pre-wrap;"></pre>



    </main>
  )
}

export default Feel
