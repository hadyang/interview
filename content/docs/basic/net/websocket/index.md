---
title: Websocket
date: 2020-01-19
draft: false
categories: net
---

# Websocket

## 简介

WebSocket 是一种与 HTTP 不同的协议。两者都位于 OSI 模型的应用层，并且都依赖于传输层的 TCP 协议。 虽然它们不同，但 RFC 6455 规定：*WebSocket设计为通过 80 和 443 端口工作，以及支持HTTP代理和中介*，从而使其与HTTP协议兼容。为了实现兼容性， WebSocket 握手使用 HTTP  Upgrade 头从 HTTP 协议更改为 WebSocket 协议。

与HTTP不同，WebSocket 提供全双工通信。此外，WebSocket 还可以在 TCP 之上启用消息流。 TCP 单独处理字节流，没有固有的消息概念。

WebSocket协议规范将 `ws`（WebSocket）和 `wss` （WebSocket Secure）定义为两个新的统一资源标识符（URI）方案，分别对应明文和加密连接。


### 优点

- **较少的控制开销**。在连接创建后，服务器和客户端之间交换数据时，用于协议控制的数据包头部相对较小。在不包含扩展的情况下，对于服务器到客户端的内容，此头部大小只有2至10字节（和数据包长度有关）；对于客户端到服务器的内容，此头部还需要加上额外的4字节的掩码。相对于HTTP请求每次都要携带完整的头部，此项开销显著减少了。
- **更强的实时性**。由于协议是全双工的，所以服务器可以随时主动给客户端下发数据。相对于HTTP请求需要等待客户端发起请求服务端才能响应，延迟明显更少；
- **保持连接状态**。与 HTTP 不同的是，Websocket需要先创建连接，这就使得其成为一种有状态的协议，之后通信时可以省略部分状态信息。而HTTP请求可能需要在每个请求都携带状态信息（如身份认证等）。
- **更好的二进制支持**。 Websocket 定义了二进制帧，相对HTTP，可以更轻松地处理二进制内容。
- **可以支持扩展**。Websocket 定义了扩展，用户可以扩展协议、实现部分自定义的子协议。如部分浏览器支持压缩等。
- **更好的压缩效果**。相对于HTTP压缩，Websocket 在适当的扩展支持下，可以沿用之前内容的上下文，在传递类似的数据时，可以显著地提高压缩率


## 连接过程

WebSocket 是独立的、创建在 TCP 上的协议。Websocket 通过 HTTP/1.1 协议的101状态码进行握手。为了创建Websocket连接，需要通过浏览器发出请求，之后服务器进行回应，这个过程通常称为 **握手（handshaking）**。

客户端请求

```log
GET / HTTP/1.1
Upgrade: websocket
Connection: Upgrade
Host: example.com
Origin: http://example.com
Sec-WebSocket-Key: sN9cRrP/n9NdMgdcy2VJFQ==
Sec-WebSocket-Version: 13
```

服务器回应

```log
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: fFBooB7FAkLlXgRSz0BT3v4hq5s=
Sec-WebSocket-Location: ws://example.com/
```

## 参考链接

- [WebSocket](https://zh.wikipedia.org/wiki/WebSocket)