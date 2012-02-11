--- 
layout: post
title: Clojure test-is results in twitter
categories: 
  - automation
  - clojure
intro: "Here's how you can have your your test-is results posted on twitter automatically as they run."
---

Here's how you can have your your test-is results posted on twitter
automatically as they run.

This is useful for example if you have regression tests that run automatically
in a remote machine, once a week(for example) and want to find a good way to
see the results.

Start by getting _jtwitter_, put it in your classphath and create:

    
    (import 'winterwell.jtwitter.Twitter)
    
    (defn twitter-update [the_message]
      (let [twitter (new Twitter "username" "password")]
        (.updateStatus twitter the_message)))
    

Update "username" and "password" with your twitter login.

Then hook it up to the /test-is'/library(test library in clojure): just
overwrite the report summary method that by default prints out the summary of
the executed tests.

Before:

    
    (defmethod report :summary [m]
      (with-test-out
        (println "\nRan" (:test m) "tests containing"
        (+ (:pass m) (:fail m) (:error m)) "assertions.")
        (println (:fail m) "failures," (:error m) "errors.")))
    

After:

    
    (defmethod report :summary [m]
      (with-test-out
        (twitter-update (str "[coverager] " (:fail m) " failures, " (:error m) " errors."))
        (println "\nRan" (:test m) "tests containing"
        (+ (:pass m) (:fail m) (:error m)) "assertions.")
        (println (:fail m) "failures," (:error m) "errors.")))
    

Note that i just added added a line calling the twitter-update method.

And thats it, now every time you run your tests, you will have the failures
and errors twittered:

![http://al3xandr3.github.com/img/clj-twitter-alert.png][1]

I've created a 2nd account on twitter where i post these automated messages.
And have my clojure tests(regression tests) running by themselves and i just
check twitter to see if all is good.

This little twitter-update method is very easy to re-use for other alerts and
automations.

   [1]: http://al3xandr3.github.com/img/clj-twitter-alert.png

