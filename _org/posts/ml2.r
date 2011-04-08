
# Linear regression

# load data
mydata = read.csv("http://spreadsheets.google.com/pub?key=0AnypY27pPCJydDB4N3MxM0tENlk3UElnZ013cW1iM3c&hl=en_GB&single=true&gid=0&output=csv", header = TRUE)

# include ggplot2
library(ggplot2)

ex2plot = ggplot(mydata, aes(x, y)) + geom_point() + 
       ylab('Height in meters') +
       xlab('Age in years')


# Implementation take 1 (naive)
alpha = 0.07
m = length(mydata$x)
theta = c(0,0)
x = mydata$x
y = mydata$y 
delta = function(x,y,th,m) {
  sum = 0
  for (i in 1:m) {
    sum = sum + (((t(th) %*% c(1,x[i])) - y[i]) * c(1,x[i]))
  }
  return (sum)
}

# 1st iteration
theta - alpha * 1/m * delta(x,y,theta,m)


# Implementation take 2 (after looking at the matlab solution)
alpha = 0.07
m = length(mydata$x)
theta = matrix(c(0,0), nrow=1)
x = matrix(c(rep(1,m), mydata$x), ncol=2)
y = matrix(mydata$y, ncol=1)
delta = function(x,y,th) {
  delta = (t(x) %*% ((x %*% t(th)) - y))
  return(t(delta))
}

# 1st iteration
theta - alpha * 1/m * delta(x,y,theta)


# running for several iterations until convergence
for (i in 1:1500) {
  theta = theta - alpha * 1/m * delta(x,y,theta)
}
theta

# visualize the fit
ex2plot + geom_abline(intercept=theta[1], slope=theta[2])

# References:
# http://al3xandr3.github.com/2011/02/24/ml-ex2-linear-regression.html
# http://openclassroom.stanford.edu/MainFolder/DocumentPage.php?course=MachineLearning&doc=exercises/ex2/ex2.html
