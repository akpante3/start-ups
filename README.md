# InReach Ventures' Interview

Thanks for taking the time to interview with us today. We're very excited that you're here!

## The Challenge

The idea is to build a "Startup Explorer Widget" that a user can use to list Startups.

The main features for the widget are:

* Display the list of the startups
* Include the startup's name, image and a short description
* Users should be able to search for a startup. While typing a query into a box, they should see a list of the startups that match
* Users should be able to alphabetically order the startups

## Getting Started

Clone this repo locally, and from the top-level directory run:

```
npm install
npm run start
```

## The Data

We built a mock endpoint to present a subset of startups. Please consume this via an HTTP call:

`http://localhost:8082/organizations.json`

This is a sample of a startup you would get by querying the endpoint:

```
{
      "id": "693309",
      "name": "Gamma",
      "created_at": 1502456093963,
      "updated_at": 1502463342857,
      "description": "Gamma is a rapidly growing, technology based, provider of ...",
      "short_description": "Gamma is a leading supplier of voice, data and mobile products and services in the UK.",
      "founded_on": 1502454680000,
      "primary_role": "company",
      "is_closed": false,
      "homepage_url": "http://www.gamma.co.uk",
      "total_funding_usd": 0,
      "number_of_investments": 0,
      "image_url": "http://public.crunchbase.com/t_api_images/v1502454665/seozli1x8mxeny6mwayf.png",
      "locations": [
        {
          "latitude": 51.3995101,
          "longitude": -1.2997858,
          "city": "Newbury",
          "country": "United Kingdom",
          "name": "Headquarters",
          "continent": "Europe"
        }
      ],
      "domain": "gamma.co.uk",
      "trends": {
        "trend-organization-magnitude": 0.872,
        "trend-person-beta": 0.5,
        "trend": 0.8385,
        "trend-person-magnitude": 0.997,
        "trend-organization-beta": 1
      },
      "person_ids": [
        "693430",
        "693310",
        "693420"
      ],
      "origin": "CRUNCHBASE",
      "tags": [
        "Service Industry"
      ],
    }
```

Good luck! ;)
