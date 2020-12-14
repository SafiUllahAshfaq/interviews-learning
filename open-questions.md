## Algorithms

- array of string mn c anagram find krny hain
- multiplication of two numbers
- nested array ko flat krna h
- https://edabit.com/challenge/TzxoYExuxuQw2ahWR

## Data Structures

- Searching algos?
- Which data structure to use when?
- Limitation of trees?
- Types of data structures?
- Which to use when?
- How to save inches or centi meters in database in efficient data structure?

## Dev Ops

- Mapping in logstash and kibana?
- Limitation of lambda function?

## Designing / Architecture

- What design patterns have you used?
- what are anti patterns? how to avoid them?
- MongoDb mn nested documents kb bnaty hain?
- Kis trha ki application mn Node.js use krni a aur MongoDb kis trha ki app mn?
- React is best for which type of apps and Angular for which type of apps?
- Unrelated components mn data sharing k kya kya possible ways hain?
- What are data structures?
- How you make choice which data structure to use when?
- Linear, Non-Linear data structures? When to use which?
- What is scalable architecture?
- What are scalable applications?
- What is micro-services architecture?
- How do micro-services communicate in between?
- How will you notify one micro-service from other micro-service on completion of some task?
- How will you implement authentication in a micro-services mesh?
- What are benefits of micro-services?
- Cold start and Warm start?
- Hardware and Software provisioning?
- What will be your decisioning criteria for deciding between MongoDB and Fire-store? (based upon Software Provisioning/Technical aspects)
- In what kinda software project you’ll prefer micro-services architecture?

## VCS (GitLab/GitHub)

- What are Hooks?
- What are Web, Client side, Server side hooks?
- What is PR/MR?
- What is mono repo arhitecture?
- What are actions in GitHub? What is the equivalent of GitHub actions in GitLab?

# Databases

---

### General

- What is indexing? How indexing works?
- When should indexing be engaged?
- What's the best possible usecases for indexing?
- What are disadvantages/drawbacks of indexing?
- Clustered vs Non-Clustered index?
- What is atomicity?
- What is normalization?
- What are some application layer protocols? (HTTP, FTP, WS, SMTP, SSH)
- What is a protocol?
- 17931695? is divisible by 7 or not?

## MongoDB

- References ko kaisy manage krty hain MongoDb mn?
- Indexing in MongoDb?
- Namespace in mongodb?
- Hooks in mongodb? **(M O N G O O S E)**
- What is sharding?
- How to manipulate deply nested objects?

---

## Http/REST

- What is REST?
- What are the constraints of REST?
- What is HATEOS?
- What does State and Representation in REST refer to?
- Differentiate b/w POST and PUT? (Idempotency)
- Resource names in API's should be singular or plural?
- How many resources should be consumed in an API (as URL params) at a single time?
- What will happen if an API has multiple resources (URL params) in single end-point? What's the downside to that?

## Node.js

- What is eventloop?
- Streams vs Read in node.js?
- Http vs Https module?
- What are Middlewares?
- Pipes in node.js?
- What is the name of node's default port? (NODE_PORT)
- How do we maintain logs in node api?
- What's event loop?
  - What are it's different phases?
  - What is "polling" phase in event loop?
- If a for loop runs 30 thousand times, it will obviously block the main thread, how to avoid it from blocking the main thread?
  - We can wrap the code inside for loop and put it in setTimeout/promise/async-await, so iterations of loop will not block the main thread.
    - In this way, memory will be exhaused? How?
    - How we will avoid that memory exhaust?
      - We can increase the count of threads inside "thread pool", in this way eventQueue (that consumes memory) will not be that much length, since number of threads inside "thread pool" are the bottleneck here, we can increase their count.
  - We can use worker thread, (process.fork) and offload the for loop on that separate thread.
  - We can use a framework like EWD.js to consume multi-threaded execution if the application is of that kind.
- How can we run concurrent code in nodejs? (pm2, EWD.js)

## Express

- How we do API versioning?
- How many API versions can/should be maintained in express API?

---

## React

- How do you check types in react? (type validation in react) [prop types and default types or you can use typescript as well]
- How will you pass a prop from parent to 5th child directly? [you can use redux store or context API]
- Class vs Functional components? Diff?
  - class : functional
  - lifecycle methods [polymorphism based]: hooks [polymorphism based]
- When useEffect/or any hook is used?
- If useEffect is equivalent to componentDidMount then isn’t it a life cycle method then?
- Can you map life cycle methods on to react hooks? Like which hook is equivalent to componentDidMount?

## Angular

- How to sequentially trigger HTTP requests in Angular?
- What are interceptors?

## TypeScript

- At what point types are checked in typescript? [at design time]

## HTML

- What is preventDefault?
- What is event bubbling?
- What is event delegation?

## JavaScript

- ES5 vs ES6 major differences?
- Map k andr c conditional return kia jaye to kya wo filter ki trha act ni kry ga?
- How this is different in ES5 and ES6?
- Convert ES6 code to ES5.
- TypeScript mn utility types kya hain?
- What is the benefit of using promises? (converting asynchronous code to synchronous)
- Polymorphism in JavaScript? Method overloading vs Method overriding? (how to do in JS)
- OOP in javascript?
- OOP based vs Functional Programming? Which to use when and what type of system?
- What are design patterns? Do you follow any of them?
- strict vs non strict mode
- Map q aya tha?
- Set q aya tha?
- for in vs for of, difference and pro cons?
- for vs forEach?
- Why can't we break the execution in forEach?
- symbol in JS?
- promises long chaining scenarios?
- How hoisting works?
- Abstraction in JS?
- OOP in JS how?
- How to specify access levels for variables in JS?
- How many level of overriding can be done?
- Why or when promises are used?
- How spread (es6) works under the hood?
- How are async/await different from promises?

## Team Lead

- How do you define your deadlines?
- Team mates c kaam kaisy niklwaty o?
- If you are not meeting the deadline, how do you respond to that?
- Is buffering while defining deadlines good or not?

## General/Scenario Based/Implementation

- Hashing vs Encryption?
- What is HashMap?
- What is indexing?
- What is REST api?
- Authorization vs Authentication, please explain them?
- How a typical HTTP request works?
- What is GitHub? How does it differ from Google Docs or dropbox?
- OAuth vs OpenID, please explain the difference?
- OAuth vs JWT, please explain the difference?
- How is socket connection established and maintained?
- What's the difference between "image" and "container" in docker world?
- How to communicate between docker containers?
- What are middlewares?
- How will you identify if a JWT is compromised or not? (Separate framework with custom set rules should be in place to identify if a JWT is compromised or not)
- How will you get rid of that malicious token? (Blacklist tokens)
- Does that balcklist of JWT's needs to be persisted?
- When do we clear the blacklist of JWT's?
- How do you maintain user sessions?
- What should be the strategy for refresing token?
- Why a JWT should be refreshed?
- How do you implement **role based** and **user based** authentication?
- How would you implement "Sign out from all devices" feature?
- How would you implelent "Remember me" feature?
- "Session" vs "Token" startegies, what's the difference? ("Sessions" vs "JWT Token", how do they differ?)
- How will you perform "server side request validation" for request body, query params or url params?
- Why mono-repo architecture is used?
- How can we send JWT from client to server? (in how many ways)

## Personal

- Tell me something about yourself that is not mentioned in your cv/resume?
- What do you wanna do?
- What’s the next big thing you wanna do?
- Why did you join your current company?
- Why do you wanna leave the company?

# Materials

---

- Method overriding in javascript: https://coderwall.com/p/bdadoa/javascript-function-overloading
- Prototypal inheritance / Polymorphism in es6
  - https://javascript.info/prototype-inheritance
  - https://stackoverflow.com/questions/44391149/es6-classes-ability-to-perform-polymorphism
- es5 vs es6: https://www.javatpoint.com/es5-vs-es6
- Data structures:
  - Types: https://www.freecodecamp.org/news/the-top-data-structures-you-should-know-for-your-next-coding-interview-36af0831f5e3/
  - Graph: https://www.youtube.com/watch?v=cWNEl4HE2OE
  - Linear vs Non Linear: https://pediaa.com/what-is-the-difference-between-linear-and-non-linear-data-structures/
  - Main characteristics: https://searchsqlserver.techtarget.com/definition/data-structure
  - Types of data structures?
  - When to use which data structure?
  - Referencing in mongodb: https://docs.mongodb.com/manual/reference/database-references/
- OOP vs Functional programming: https://www.educba.com/functional-programming-vs-oop/

* How to implement Lifecycle methods in useEffect?
* Default props in react with TypeScript?
* Rebase in gitLab?
* Cherry pick in gitLab?
* Define type for function with parameters and some return type in TypeScript?
* Why useMemo is used jn react?
* What if some promise is rejected in Promise.all?
* Nested contexts in React context API are allowed?
* Context1 =》Context2 =》 componentNested, are values of Context1 accessible in componentNested?

- How to check if two rectangles are overlapping or not?
- How to identify if there is a circle in between linkedlist node?
