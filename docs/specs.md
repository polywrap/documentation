# Web3API Specification

Pre-alpha Release (Draft 2021-06-12)

# Introduction

Web3API is a _developer toolchain that enables the integration of Web3-based protocol business logic into decentralized applications (dApps)_. The core Web3API standard does not make any Web- nor programming language-specific assumptions, and is thus designed to be employed in applications written in any programming language and in any environment.

This document describes the pre-alpha release of the core Web3API standard.

## Motivation

The project's main goal is to solve what we describe as the Web3 "integration problem." Web3API attempts to provide the end-developer with a Web3 integration experience comparable to that of Web2 in terms of simplicity, without sacrificing decentralization. This section details the integration problem by describing the Web2 integration experience as well as the challenges faced by today's prevailing solutions for Web3.

#### The Integration Problem

In the Web2 version of the internet, companies such as Google, Facebook, Stripe, and Twitter share assets with developers to facilitate integration of business logic into their applications. These assets include data points, pieces of code, software or services. The key characteristic of Web2 shared assets is that they are hosted on centralized servers and can be queried using simple, consistent and easy-to-use APIs.

This characteristic is absent in the Web3-era. Here, centralized servers are replaced by decentralized ones: Ethereum, a decentralized network of thousands of computers or IPFS, a distributed file system. While these novel technologies shift control of data back into the hands of users, they unfortunately present developer challenges that did not exist in Web2. Notably in Web2, a request can be made to a predictable URI to elicit a response with the shared assets, such as business logic. Web3 protocol business logic, on the other hand, is hosted on decentralized networks and cannot be easily queried at predictable endpoints.
