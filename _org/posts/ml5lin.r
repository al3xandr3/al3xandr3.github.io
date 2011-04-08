
# Regularized linear regression

# load data
mydata = read.csv("http://spreadsheets.google.com/pub?hl=en_GB&hl=en_GB&key=0AnypY27pPCJydGhtbUlZekVUQTc0dm5QaXp1YWpSY3c&output=csv", header = TRUE)

# view data
plot(mydata)

# setup variables
m = length(mydata$x) # samples
x = matrix(c(rep(1,m), mydata$x, mydata$x^2, mydata$x^3, mydata$x^4, mydata$x^5), ncol=6)
n = ncol(x) # features
y = matrix(mydata$y, ncol=1)
lambda = c(0,1,10)
d = diag(1,n,n)
d[1,1] = 0
th = array(0,c(n,length(lambda)))

# apply normal equations for each of the lambda's
for (i in 1:length(lambda)) {
  th[,i] = solve(t(x) %*% x + (lambda[i] * d)) %*% (t(x) %*% y)
}

# plot
plot(mydata)

# lets create many points
nwx = seq(-1, 1, len=50);
x = matrix(c(rep(1,length(nwx)), nwx, nwx^2, nwx^3, nwx^4, nwx^5), ncol=6)
lines(nwx, x %*% th[,1], col="blue", lty=2)
lines(nwx, x %*% th[,2], col="red", lty=2)
lines(nwx, x %*% th[,3], col="green3", lty=2)
legend("topright", c(expression(lambda==0), expression(lambda==1),expression(lambda==10)), lty=2,col=c("blue", "red", "green3"), bty="n")

# References:
# http://al3xandr3.github.com/2011/03/18/ml-ex51.html
# http://openclassroom.stanford.edu/MainFolder/DocumentPage.php?course=MachineLearning&doc=exercises/ex5/ex5.html
