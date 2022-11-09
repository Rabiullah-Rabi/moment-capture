import React from "react";
import { Title } from "../../../App";

const Blog = () => {
  return (
    <div className="container mx-auto px-5 py-16">
      <Title title="Blog" />
      <div className="w-full md:w-2/3 mx-auto">
        {/* qus 1 */}
        <div className="mt-7">
          <h1 className="font-bold text-2xl mb-3">
            Difference between SQL and NoSQL
          </h1>
          <p className="text-md ml-6">
            SQL databases are primarily called as Relational Databases (RDBMS);
            whereas NoSQL database are primarily called as non-relational or
            distributed database. <br />
            SQL databases represent massive communities, stable codebases, and
            proven standards. Multitudes of examples are posted online and
            experts are available to support those new to programming relational
            data. NoSQL technologies are being adopted quickly, but communities
            remain smaller and more fractured. However, many SQL languages are
            proprietary or associated with large single-vendors, while NoSQL
            communities benefit from open systems and concerted commitment to
            onboarding users. SQL is available to most major platforms, from
            operating systems to architectures and programming languages.
            Compatibility varies more widely for NoSQL, and dependencies need to
            be investigated more carefully.
          </p>
        </div>
        {/* qus 2 */}
        <div className="mt-7">
          <h1 className="font-bold text-2xl mb-3">
            What is JWT, and how does it work?
          </h1>
          <p className="text-md ml-6">
            <b>JWT :</b> JSON Web Token (JWT) is an open standard (RFC 7519) for
            securely transmitting information between parties as JSON object. It
            is compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP). <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization <br />
            Once decoded, you will get two JSON strings: The header and the
            payload. The signature. The JOSE (JSON Object Signing and
            Encryption) header contains the type of token — JWT in this case —
            and the signing algorithm. The payload contains the claims. This is
            displayed as a JSON string, usually containing no more than a dozen
            fields to keep the JWT compact. This information is typically used
            by the server to verify that the user has permission to perform the
            action they are requesting. There are no mandatory claims for a JWT,
            but overlaying standards may make claims mandatory. For example,
            when using JWT as bearer access token under OAuth2.0, iss, sub, aud,
            and exp must be present. some are more common than others. The
            signature ensures that the token hasn’t been altered. The party that
            creates the JWT signs the header and payload with a secret that is
            known to both the issuer and receiver, or with a private key known
            only to the sender. When the token is used, the receiving party
            verifies that the header and payload match the signature.
          </p>
        </div>
        {/* qus 3 */}
        <div className="mt-7">
          <h1 className="font-bold text-2xl mb-3">
            What is the difference between javascript and NodeJS?
          </h1>
          <p className="text-md ml-6">
            <b>JavaScript</b> Javascript is a Scripting language. It is mostly
            abbreviated as JS. It can be said that Javascript is the updated
            version of the ECMA script. Javascript is a high-level programming
            language that uses the concept of Oops but it is based on prototype
            inheritance.
            <br />
            <b>Node.js</b>is a cross-platform and open source Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
          </p>
        </div>
        {/* qus 4 */}
        <div className="mt-7">
          <h1 className="font-bold text-2xl mb-3">
            How does NodeJS handle multiple requests at the same time?
          </h1>
          <p className="text-md ml-6">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
