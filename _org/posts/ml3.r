
mydata = read.csv("http://spreadsheets.google.com/pub?key=0AnypY27pPCJydExfUzdtVXZuUWphM19vdVBidnFFSWc&output=csv", header = TRUE)

# show last 10 rows
tail(mydata, 10)

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
J = array(0,c(50,length(alpha)))
m = length(dta$price)
theta = matrix(c(0,0,0), nrow=1)
x = matrix(c(rep(1,m), dta$area.scaled, dta$bedrooms.scaled), ncol=3)
y = matrix(dta$price, ncol=1)

delta = function(x,y,th) {
  delta = (t(x) %*% ((x %*% t(th)) - y))
  return(t(delta))
}
# delta(x,y,theta)

cost = function(x,y,th,m) {
  prt = ((x %*% t(th)) - y)
  return(1/m * (t(prt) %*% prt))
}
# cost(x,y,theta, m)

# run J for 50x, on each alpha
for (j in 1:length(alpha)) {
  for (i in 1:50) {
    J[i,j] = cost(x,y,theta,m)
    theta = theta - alpha[j] * 1/m * delta(x,y,theta)
  }
}

# print the J plots
par(mfrow=c(3,2))
for (j in 1:length(alpha)) {
  plot(J[,j], type="l", xlab=paste("alpha", alpha[j]), ylab=expression(J(theta)))
}

# running until convergence
for (i in 1:50000) {
  theta = theta - 1 * 1/m * delta(x,y,theta)
  if (abs(delta(x,y,theta)[2]) < 0.0000001) {
    print(paste("iteration", i))
    break # to interrupt updates
  }
}

#1. The final values of theta
print(theta)

#2. The predicted price of a house with 1650 square feet and 3 bedrooms. Don't forget to scale your features when you make this prediction!
theta %*% c(1, (1650 - mean(dta["area"]))/sd(dta["area"]), (3 - mean(dta["bedrooms"]))/sd(dta["bedrooms"]))

## Normal Equations

x = matrix(c(rep(1,m), mydata$area, mydata$bedrooms), ncol=3)
y = matrix(mydata$price, ncol=1)
theta.normal = solve(t(x) %*% x) %*% (t(x) %*% y)
theta.normal

t(theta.normal) %*%  c(1, 1650, 3)
