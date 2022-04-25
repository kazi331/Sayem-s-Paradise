import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container mx-auto p-2 py-4 my-4 col-12 col-md-8">
      <Accordion defaultActiveKey="2">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Q-1: Difference between authorization and authentication
          </Accordion.Header>
          <Accordion.Body>
            <em>Authentication</em> is the process of verifying someone if
            he/she have the right permission to access certain data. Just like
            checking someones visa and passport in the airlines. <br />
            On the otherhand, <em>Authorization</em> is the process of checking
            which permissions are available for a perticular user. Just like, an
            contributor/editor of a website doesn't have the access to core
            feature of the website, wherease the admin have the administrative
            power of the site and he can do whatever he need to do.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Q-2: Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase is a google provided authentication system that helps
            developers to test their apps and websites. To deploy firebase
            authentication system, developers need to create a firebase project
            and use firebase configuration in their project to connect firebase
            with their apps and websites. There are also some other functions
            that need to be done to use firebase authentication system on apps
            and websites.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Q-3: What other services does firebase provide other than
            authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase is a opensource projet system that can be used for any any
            web application development for development stage. Firebase provides
            many useful features like hosting, authentication, realtime
            database, storage etc. to developers. Developers can develop, deploy
            and run thei apps on firebase.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
