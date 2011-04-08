
# Multivariate Linear Regression

# load data
mydata = read.csv("http://spreadsheets.google.com/pub?key=0AnypY27pPCJydExfUzdtVXZuUWphM19vdVBidnFFSWc&output=csv", header = TRUE)

# show last 5 rows
tail(mydata, 5)

# given a data frame and the column names i want to scale
# creates new columns: feature.scale = (feature - mean)/std
feature.scale = function (dta, cols) {
  for (col in cols) {
    sigma = sd(dta[col])
    mu = mean(dta[col])
    dta[paste(names(dta[col]), ".scale", sep = "")] = (dta[col] - mu)/sigma
  }
  return(dta)
}

dta = feature.scale(mydata, c("area", "bedrooms"))
tail(dta, 5)

## Gradient Descent: J vs #iterations, to find alpha
# lets try out a few alpha's
alpha = c(0.03, 0.1, 0.3, 1, 1.3, 2)

# store the J values over the iterations
J = array(0,c(50,length(alpha)))
m = length(dta$price)
theta = matrix(c(0,0,0), nrow=1)
x = matrix(c(rep(1,m), dta$area.scale, dta$bedrooms.scale), ncol=3)
y = matrix(dta$price, ncol=1)

# the delta updates
delta = function(x,y,th) {
  delta = (t(x) %*% ((x %*% t(th)) - y))
  return(t(delta))
}

# the cost for a given theta
cost = function(x,y,th,m) {
  prt = ((x %*% t(th)) - y)
  return(1/m * (t(prt) %*% prt))
}

# run J for 50x, on each alpha
for (j in 1:length(alpha)) {
  for (i in 1:50) {
    J[i,j] = cost(x,y,theta,m) # capture the Cost
    theta = theta - alpha[j] * 1/m * delta(x,y,theta)
  }
}

# lets have a look
# print the J plots
par(mfrow=c(3,2))
for (j in 1:length(alpha)) {
  plot(J[,j], type="l", xlab=paste("alpha", alpha[j]), ylab=expression(J(theta)))
}

# running until convergence
for (i in 1:50000) {
  theta = theta - 1 * 1/m * delta(x,y,theta)
  if (abs(delta(x,y,theta)[2]) < 0.0000001) {  
    break # to interrupt updates
  }
}

# 1. The final values of theta
print("Theta:")
print(theta)

# 2. The predicted price of a house with 1650 square feet and 3 bedrooms.
# Don't forget to scale your features when you make this prediction!
print("Prediction for a house with 1650 square feet and 3 bedrooms:")
print(theta %*% c(1, (1650 - mean(dta["area"]))/sd(dta["area"]), (3 - mean(dta["bedrooms"]))/sd(dta["bedrooms"])))



## Normal Equations
#
x = matrix(c(rep(1,m), mydata$area, mydata$bedrooms), ncol=3)
y = matrix(mydata$price, ncol=1)
theta.normal = solve(t(x) %*% x) %*% (t(x) %*% y)

# 1. In your program, use the formula above to calculate. Remember that
# while you don't need to scale your features, you still need to add 
# an intercept term.
print("Theta:")
print(theta.normal)

# 2. Once you have found  from this method, use it to make a price prediction 
# for a 1650-square-foot house with 3 bedrooms. Did you get the same price 
# that you found through gradient descent?
print("Price prediction for a 1650-square-foot house with 3 bedrooms")
t(theta.normal) %*%  c(1, 1650, 3)


# References:
# http://al3xandr3.github.com/2011/03/08/ml-ex3.html
# http://openclassroom.stanford.edu/MainFolder/DocumentPage.php?course=MachineLearning&doc=exercises/ex3/ex3.html 
