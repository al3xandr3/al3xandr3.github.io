source("~/Dropbox/my/dev/r/rprofile")

a.load()
f = readLines('./quotes_temp.txt')
d = a.word.freq(data.frame(f))
png('./img/quotes_cloud.png', width=500,height=500)
wordcloud(d$word, d$freq, min.freq=2, max.words=50, random.order=FALSE, colors=brewer.pal(8,"Dark2"))
dev.off()