# Hackday: Translation

An exploration of the i18n/i18next translation format and the ease of use of related libraries for JS and Python.

## Setup
Install the dependencies:
```bash
npm install
pip install -r requirements. txt
```

Run the servers:
```bash
serve
uvicorn main:app
```

Navigate to http://localhost:3000/ to see the results.

The API provided by the Python server is available at http://localhost:8000/ and its OpenAPI documentation is 
available at http://localhost:8000/docs.

# Architecture
The frontend is a pure JS app that uses the i18next library to handle translations. 
The backend is a Python app that uses FastAPI and i18nice to handle translations.
Nothing is polished since it is a hackday project.

# Conclusion
The i18n JSON format is simple and easy to use. The i18next JavaScript library is also easy to use and has a lot of 
features. I found the documentation quite complete, but not super well-structured. Everything is there, but not in the 
order that you would expect. A lot of clicking around and searching leads you to the right place, and it is easily 
learned as it isn't that many features and configuration options.

The i18nice Python library is also easy to use, but it is not as feature complete as the i18next library. It is also
very much a hobby project. It is still very much usable and translations should ideally be done in frontend anyway. 
Some configuration was needed to make it work with i18next's structure and there is no support for default namespaces.

In the end, I think it is a very promising solution and would like to try it out some more to find out if there are any 
dealbreakers. Additional research for better Python libraries would also be nice.
