source("~/Dropbox/my/dev/R/Rprofile")

# a.load()
setwd("~/Dropbox/my/dev/al3xandr3.github.com")
f = read.csv(file="./quotes.csv", head=TRUE, sep=",")

# add time of week
f$day = weekdays(as.Date(f$date))

png('./img/quotes_frequency.png', width=300,height=200)
f$day2 = factor(f$day, levels = c("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"))
ggplot(f, aes(day2)) + geom_histogram(aes_string(y="..count..",fill="..count.."), alpha=0.6) + 
                                      xlab(NULL) + ylab(NULL) + theme(legend.position = "none") +
                                      theme(panel.border = element_blank(), panel.background = element_blank(),
                                      axis.text.x=element_text(size=12,angle=65, hjust=1), strip.background = element_blank())
dev.off()

# wordcloud
d = a.word.freq(f$content)
png('./img/quotes_cloud.png', width=500, height=400)
wordcloud(d$word
          ,d$freq
          ,min.freq=2
          ,scale=c(7,.1)
          ,max.words=50
          ,rot.per=.15
          ,random.order=FALSE
          ,colors=brewer.pal(9,"Blues")
          )
dev.off()

