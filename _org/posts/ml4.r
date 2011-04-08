
# Logistic Regression and Newton's Method

# load data
mydata = read.csv("http://spreadsheets.google.com/pub?key=0AnypY27pPCJydC1vRVEzM1VJQnNneFo5dWNzR1F5Umc&output=csv", header = TRUE)

# plots
plot(mydata$test1[mydata$admitted == 0], mydata$test2[mydata$admitted == 0], xlab="test1", ylab="test2", , col="red")
points(mydata$test1[mydata$admitted == 1], mydata$test2[mydata$admitted == 1], col="blue", pch=2)
legend("bottomright", c("not admitted", "admitted"), pch=c(1, 2), col=c("red", "blue"))

# sigmoid
g = function (z) {
  return (1 / (1 + exp(-z) ))
} # plot(g(c(1,2,3,4,5,6)))

# hypothesis 
h = function (x,th) {
  return( g(x %*% th) )
} # h(x,th)

# cost
J = function (x,y,th,m) {
  return( 1/m * sum(-y * log(h(x,th)) - (1 - y) * log(1 - h(x,th))) )
} # J(x,y,th,m)

# derivative of J (gradient)
grad = function (x,y,th,m) {
  return( 1/m * t(x) %*% (h(x,th) - y))
} # grad(x,y,th,m)

# Hessian
H = function (x,y,th,m) {
  return (1/m * t(x) %*% x * diag(h(x,th)) * diag(1 - h(x,th)))
} # H(x,y,th,m)

# setup variables
j = array(0,c(10,1))
m = length(mydata$test1)
x = matrix(c(rep(1,m), mydata$test1, mydata$test2), ncol=3)
y = matrix(mydata$admitted, ncol=1)
th = matrix(0,3)

# iterate until convergence
# note that the newton's method converges fast
for (i in 1:10) {
  j[i] = J(x,y,th,m)
  th = th - solve(H(x,y,th,m)) %*% grad(x,y,th,m) 
}

# J by #iterations
plot(j, xlab="iterations", ylab="cost J")

# 1. What values of  did you get? How many iterations were required for convergence?
print(th)

# 2. What is the probability that a student with a score of 20 on Exam 1
# and a score of 80 on Exam 2 will not be admitted?
print((1 - g(c(1, 20, 80) %*% th))* 100)

# when ax0 + bx2 + cx3 = 0 is the middle(decision boundary line),
# so given x1 from sample data, solving to x2, we get:
x2 = (-1/th[3,]) * ((th[2,] * x1) + th[1,])

# get 2 points (that will define a line)
x1 = c(min(x[,2]), max(x[,2]))

# plot
plot(x1,x2, type='l',  xlab="test1", ylab="test2")
points(mydata$test1[mydata$admitted == 0], mydata$test2[mydata$admitted == 0], col="red")
points(mydata$test1[mydata$admitted == 1], mydata$test2[mydata$admitted == 1], col="blue", pch=2)
legend("bottomright", c("not admitted", "admitted"), pch=c(1, 2), col=c("red", "blue") )

# References:
# http://al3xandr3.github.com/2011/03/16/ml-ex4.html
# http://openclassroom.stanford.edu/MainFolder/DocumentPage.php?course=MachineLearning&doc=exercises/ex4/ex4.html
