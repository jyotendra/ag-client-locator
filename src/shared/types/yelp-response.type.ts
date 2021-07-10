export type businessDetails = {
    /** 4 */
    "rating": number,
    /** "$" */
    "price": string,
    /** "+14152520800" */
    "phone": string,
    /** "E8RJkjfdcwgtyoPMjQ_Olg"*/
    "id": string,
    /**"four-barrel-coffee-san-francisco" */
    "alias": string,
    /** false */
    "is_closed": boolean,
    "categories": [
        {
            /** "coffee" */
            "alias": string,
            /** "Coffee & Tea" */
            "title": string
        }
    ],
    /** 1738 */
    "review_count": number,
    /** "Four Barrel Coffee" */
    "name": string,
    /** "https://www.yelp.com/biz/four-barrel-coffee-san-francisco" */
    "url": string,
    "coordinates": {
        /** 37.7670169511878 */
        "latitude": number,
        /** -122.42184275 */
        "longitude": number
    },
    /** "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg" */
    "image_url": string,
    "location": {
        /** "San Francisco" */
        "city": string,
        /** "US" */
        "country": string,
        "address2": string,
        "address3": string,
        /** "CA" */
        "state": string,
        /** "375 Valencia St" */
        "address1": string,
        /** "94103" */
        "zip_code": string
    },
    /** 1604.23 */
    "distance": number,
    /** ["pickup", "delivery"] */
    "transactions": string[]
}

export type yelpResponseType = {
    /** 8228*/
    "total": number,
    "businesses": businessDetails[],
    "region": {
        "center": {
            /** 37.767413217936834 */
            "latitude": number,
            /** -122.42820739746094 */
            "longitude": number
        }
    }
}