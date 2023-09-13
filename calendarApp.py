from __future__ import print_function

import datetime as dt
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/calendar"]


def main():
    """Shows basic usage of the Google Calendar API.
    Prints the start and name of the next 10 events on the user's calendar.
    """
    creds = None

    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists("token.json"):
        creds = Credentials.from_authorized_user_file("token.json")

    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                "credentials.json", SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open("token.json", "w") as token:
            token.write(creds.to_json())

    try:
        # listing all events
        service = build("calendar", "v3", credentials=creds)
        # Call the Calendar API
        # now = dt.datetime.utcnow().isoformat() + 'Z'  # 'Z' indicates UTC time
        # print('Getting the upcoming 10 events')
        # events_result = service.events().list(calendarId='primary', timeMin=now,
                                              # maxResults=10, singleEvents=True,
                                              # orderBy='startTime').execute()
        # events = events_result.get('items', [])

        # not events:
         #   print('No upcoming events found.')
          #  return

        # Prints the start and name of the next 10 events
        # for event in events:
         #   start = event['start'].get('dateTime', event['start'].get('date'))
          #  print(start, event['summary'])

        event = {
            "sumary": "My event",
            "location": "a place",
            "description": "event",
            "colorId": 6,
            "start": {
                "dateTime": "2023-09-30T09:00:00-06:00",  # UTC
                "timeZone": "CST",
            },
            "recurrence": [
                "RRULE:FREQ=DAILY;COUNT=3"  # daily for 3 days
            ],
            "attendees": [
                {"email": "attendee1@email.com"},
                {"email": "attendee2@email.com"}
            ],
            }
        
        event = service.events().insert(calendarId="primary", body=event).execute()
        print(f"Events created{event.get('htmlLink')}")

    except HttpError as error:
        print("An error occurred", error)

if __name__ == '__main__':
    main()
