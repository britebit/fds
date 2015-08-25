# Fraud Detection Service

## Example API Calls


The FraudDetection/Scores resource accepts a HTTP GET request with a querystring supplying order information required for scoring.  The response to a valid request will contain a fraud detection score and, optionally, a list containing a breakdown of the score.

###Required Parameters
The client must pass the following parameters to receive a valid fraud detection score:  

#### billingEmailAddress	
The email address supplied as part of the billing information. 

#### billingCity
The city supplied as part of the billing information.

#### shippingAddress
The street address supplied as part of the shipping information. 

#### shippingCity
The city supplied as part of the shipping information.

#### orderDateAndTime
The date that the order was created.  The date should be a UTC date formatted YYYY-MM-DDTHH:MM:SSZ (using ISO 8601 as a guide) e.g. 
````2015-12-31T08:15:30Z````    
If the time is not available then HH:MM:SS should be 00:00:00 .

#### orderQuantity
The number of items ordered.

#### orderTotal
The toal cost of the order.


###Optional Parameters
The client may pass the parameters listed below.  If these parameters are not passed then the default values are used.
#### currency
The ISO 4217 code for the currency used for the transaction. e.g. USD, GBP, EUR, RUB etc.  If no currency code is supplied then USD (United States Dollar) is assumed. 

#### scoreType
The fraud score format determines what information is returned by a call to the Scores resource.  Valid values are

- score 
- components
- score-and-components

````score```` returns fraud detection score (i.e. a number) only. ````components```` returns the individual components that make up the total fraud detection score. ````score-and-components```` returns both the fraud detection score and the components that make up the total fraud detection score.  See [JSON EXAMPLE LINK GOES HERE] for examples.


http://api.xyz.com/FraudDetection/Scores?billingEmail=joe@bloggs.com&billingCity=Some%20City&shippingAddress=999%20Letsby%20Avenue&orderDate=2015-12-31T08:15:30Z05:00&totalOrderQuantity=5&currency=USD&orderTotal=99.99&fraudScoreFormat=score