# Pubarazzi ©
Dear CEO,

This is your MVP in 4/5 hours. It is by design that once you add a drink, you can't remove it since we're on commission and all.

![](/screenshots/screen1.png)

![](/screenshots/screen2.png)

![](/screenshots/screen3.png)

# API
Dear Backend developers, I have used [axios-mock](https://github.com/ctimmerm/axios-mock-adapter) to simulate calls to the api.

So have a look at `helpers/mockApi` folder. The `index.js` contains the current API calls, samples of responses are in `mockApi/data`. This is our contract - don't break it and we'll get along.

# And...
Dear interview folks,

I assumed the idea behind this exercise is to see how much I can build in 4 hours (with vague requirements). I tried to keep the code quality ok since it is, you know, still an interview.

Given few more hours, I would add prop-types, have a loader, use **enzyme** and improve on tests coverage - right now, I've been pragramatic with the tests choosing to use snapshots most of the time. (The reason I didn't test the containers is that I made the api mock random making the tests non-deterministic - I should have revisited that but .. time)


I didn't add *Redux* but that wasn't because of time - I thought that given the requirements, adding it would be contrived. Local state is fine up to this point.