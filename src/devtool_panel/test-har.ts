// @ts-nocheck
export const harfile: chrome.devtools.network.HARLog = {
  version: '1.2',
  creator: {
    name: 'Firefox',
    version: '106.0.3',
  },
  browser: {
    name: 'Firefox',
    version: '106.0.3',
  },
  pages: [
    {
      startedDateTime: '2022-11-07T09:55:17.883-05:00',
      id: 'page_2',
      title: 'Lti 1.3 Tool Title',
      pageTimings: {
        onContentLoad: 1519,
        onLoad: 2422,
      },
    },
  ],
  entries: [
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:17.883-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/courses/2/assignments/14',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=UXP3Akj1OiU1dqzcS%2FUovFJUfr7ET80m239a62%2Fh6AhoP41XAKBvYFoY26skuHvVKmxHzaIIn26UOxCnItikZg%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: 'Upgrade-Insecure-Requests',
            value: '1',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              'UXP3Akj1OiU1dqzcS/UovFJUfr7ET80m239a62/h6AhoP41XAKBvYFoY26skuHvVKmxHzaIIn26UOxCnItikZg==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 1448,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:55:19 GMT',
          },
          {
            name: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
          {
            name: 'Transfer-Encoding',
            value: 'chunked',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Status',
            value: '200 OK',
          },
          {
            name: 'X-Request-Cost',
            value: '0.2700730729992973',
          },
          {
            name: 'X-Session-Id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: 'Cache-Control',
            value: 'no-store',
          },
          {
            name: 'X-Request-Context-Id',
            value: 'a7e895a2-7498-40d6-b403-f1ead1f5080d',
          },
          {
            name: 'X-Rate-Limit-Remaining',
            value: '600.0',
          },
          {
            name: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            name: 'X-Canvas-Meta',
            value:
              'a=2;g=17P5H0jLBnqKyCQnQxreoDc6pTGinvqalU1sUjUj;s=1;c=development;o=assignments;n=show;t=Course;i=2;b=863980;m=863980;u=0.25;y=0.00;d=0.02;',
          },
          {
            name: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            name: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            name: 'Pragma',
            value: 'no-cache',
          },
          {
            name: 'X-Canvas-User-Id',
            value: '10000000000001',
          },
          {
            name: 'X-Download-Options',
            value: 'noopen',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'X-Runtime',
            value: '1.321095',
          },
          {
            name: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            name: 'Content-Security-Policy',
            value:
              "frame-ancestors 'self' testsite.canvas.docker staging.testsite.canvas.docker beta.testsite.canvas.docker test.testsite.canvas.docker qa.testsite.canvas.docker;",
          },
          {
            name: 'Set-Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; path=/',
          },
          {
            name: 'Set-Cookie',
            value:
              'log_session_id=880de3bc9911286593ca422baadcf726; path=/; HttpOnly',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
        ],
        content: {
          mimeType: 'text/html; charset=utf-8',
          size: 30255,
          text: '',
        },
        redirectURL: '',
        headersSize: 1222,
        bodySize: 31477,
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: 0,
        connect: 0,
        ssl: 0,
        send: 0,
        wait: 1484,
        receive: 0,
      },
      time: 1484,
      _securityState: 'insecure',
      serverIPAddress: '192.168.42.42',
      connection: '80',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.392-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/fonts/lato/extended/Lato-Regular-bd03a2cc27.woff2',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value:
              'application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/octet-stream',
          },
          {
            name: 'Content-Length',
            value: '182708',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 16 May 2022 20:52:43 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/octet-stream',
          size: 182708,
          encoding: 'base64',
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 182708,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.393-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/fonts/lato/extended/Lato-Bold-cccb897485.woff2',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value:
              'application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/octet-stream',
          },
          {
            name: 'Content-Length',
            value: '184912',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 16 May 2022 20:52:43 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/octet-stream',
          size: 184912,
          encoding: 'base64',
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 184912,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.395-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/fonts/lato/extended/Lato-Italic-4eb103b4d1.woff2',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value:
              'application/font-woff2;q=1.0,application/font-woff;q=0.9,*/*;q=0.8',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/octet-stream',
          },
          {
            name: 'Content-Length',
            value: '195704',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 16 May 2022 20:52:43 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/octet-stream',
          size: 195704,
          encoding: 'base64',
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 195704,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.398-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/brandable_css/default/variables-7dd4b80918af0e0218ec0229e4bd5873.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '2821',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 20:10:00 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 7447,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.399-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/timezone/America/Denver-40670c6af7.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '3083',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 29 Aug 2022 16:02:13 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 8451,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.400-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/timezone/en_US-80a0ce259b.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '1062',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 29 Aug 2022 16:02:13 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 3459,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.401-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/main-e-f04ceda768.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '4297387',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 07 Nov 2022 14:19:29 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 1207637,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.402-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/external_tools_show-c-aa2af24a47.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:35 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '37783',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 07 Nov 2022 14:19:29 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 74000,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.404-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/external_tool_redirect-c-a03f5337d7.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:35 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '5591',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Wed, 12 Oct 2022 13:40:10 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 10927,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.405-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/module_sequence_footer-c-141a1a71b5.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:35 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '62112',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 128416,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.408-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/navigation_header-c-771445ad94.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '141450',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Wed, 12 Oct 2022 13:40:10 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 280147,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.449-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/timezone/America/Denver-40670c6af7.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '3083',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 29 Aug 2022 16:02:13 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 8451,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.450-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://canvas.instructure.com/images/messages/avatar-50.png',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'canvas.instructure.com',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'image/avif,image/webp,*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/',
          },
        ],
        cookies: [],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 301,
        statusText: 'Moved Permanently',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'awselb/2.0',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:52:48 GMT',
          },
          {
            name: 'Content-Type',
            value: 'text/html',
          },
          {
            name: 'Content-Length',
            value: '134',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Location',
            value:
              'https://canvas.instructure.com:443/images/messages/avatar-50.png',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'image/png',
          size: 609,
          encoding: 'base64',
          text: 'iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACKElEQVR42u3PzWdcURjH8aFcshpKVlmVEmbb1SWErMLQbRi6Ct32b8gfUIYSwjDm5c57ZqaU0lUoWd1VV2EodzWEMqswDE+/k7TOGK3pebmTe6KHz+JZnd83JyJPwtMJ+Tge+yz1kCIixJj9EiNC0YeQYySQDRIUsxgS4Byi6RxBlkIiiKHISciYw9J7iKWy6f8qZDSycQBx5MBkg4uQADcOQ24QPEbICcSxE+OQEYehK4hjV7o7VMhwaOIFJCUvNXZYh5ymGHK6zZBqiiFVo5Dh5aWJGJKSbxo7VMglh4EEkpIfOltUyGBg4g6SkoXGjkyH3BmFDPp9EwkkJYnGDuuQOMWQeJshlRRDKkYh/V7PRAmSkjcaO6xD9rCAOLbAnlFIj8NQB+JYR3eHCul2TYUQx0LNDZYhStVhRBU545Auh4U8EoilBHmD/1VIp9OxVcAUYmiKgun/KqTddmEfE4imCfYt/nUYouzgTCPiDDvIOQlpc1jaxRHeoQL5RzE+oYy3CLGr+78KabV0BSjiAlOIYzMMUcLzDVuMQl4hwgyyRV/wemNIi2ODEJ8hj+wa4fo+FRJFf5NHH5Ix5ZWNKiTi+IMQ3yEZtXwBVkKazXUlLCAZV4UKaXKsOMIc4olDFdJo/FbADOKRCZ6th3yFeOj4PqRBBA4hnvrwEFKvL11APHW9GjLxOOT2PqROCOYQT81XQ8RnDyG12pJ47H9INkNqhEB8JoT8BNEuPSTVExuQAAAAAElFTkSuQmCC',
        },
        redirectURL:
          'https://canvas.instructure.com:443/images/messages/avatar-50.png',
        headersSize: 0,
        bodySize: 609,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.470-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'https://canvas.instructure.com/images/messages/avatar-50.png',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'Host',
            value: 'canvas.instructure.com',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'image/avif,image/webp,*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/',
          },
          {
            name: 'Sec-Fetch-Dest',
            value: 'image',
          },
          {
            name: 'Sec-Fetch-Mode',
            value: 'no-cors',
          },
          {
            name: 'Sec-Fetch-Site',
            value: 'cross-site',
          },
        ],
        cookies: [],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'date',
            value: 'Mon, 07 Nov 2022 14:52:48 GMT',
          },
          {
            name: 'content-type',
            value: 'image/png',
          },
          {
            name: 'content-length',
            value: '609',
          },
          {
            name: 'server',
            value: 'Apache',
          },
          {
            name: 'x-request-processor',
            value: '0996f37fc44e33fcd',
          },
          {
            name: 'x-a11y-ally',
            value: 'Dana Danger Grey',
          },
          {
            name: 'last-modified',
            value: 'Tue, 01 Nov 2022 13:23:31 GMT',
          },
          {
            name: 'etag',
            value: '',
          },
          {
            name: 'accept-ranges',
            value: 'bytes',
          },
          {
            name: 'p3p',
            value: 'CP=',
          },
          {
            name: 'X-Firefox-Spdy',
            value: 'h2',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'image/png',
          size: 609,
          encoding: 'base64',
          text: 'iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACKElEQVR42u3PzWdcURjH8aFcshpKVlmVEmbb1SWErMLQbRi6Ct32b8gfUIYSwjDm5c57ZqaU0lUoWd1VV2EodzWEMqswDE+/k7TOGK3pebmTe6KHz+JZnd83JyJPwtMJ+Tge+yz1kCIixJj9EiNC0YeQYySQDRIUsxgS4Byi6RxBlkIiiKHISciYw9J7iKWy6f8qZDSycQBx5MBkg4uQADcOQ24QPEbICcSxE+OQEYehK4hjV7o7VMhwaOIFJCUvNXZYh5ymGHK6zZBqiiFVo5Dh5aWJGJKSbxo7VMglh4EEkpIfOltUyGBg4g6SkoXGjkyH3BmFDPp9EwkkJYnGDuuQOMWQeJshlRRDKkYh/V7PRAmSkjcaO6xD9rCAOLbAnlFIj8NQB+JYR3eHCul2TYUQx0LNDZYhStVhRBU545Auh4U8EoilBHmD/1VIp9OxVcAUYmiKgun/KqTddmEfE4imCfYt/nUYouzgTCPiDDvIOQlpc1jaxRHeoQL5RzE+oYy3CLGr+78KabV0BSjiAlOIYzMMUcLzDVuMQl4hwgyyRV/wemNIi2ODEJ8hj+wa4fo+FRJFf5NHH5Ix5ZWNKiTi+IMQ3yEZtXwBVkKazXUlLCAZV4UKaXKsOMIc4olDFdJo/FbADOKRCZ6th3yFeOj4PqRBBA4hnvrwEFKvL11APHW9GjLxOOT2PqROCOYQT81XQ8RnDyG12pJ47H9INkNqhEB8JoT8BNEuPSTVExuQAAAAAElFTkSuQmCC',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 609,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'secure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.474-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/images/apple-touch-icon-585e5d997d.png',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'image/avif,image/webp,*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'image/png',
          },
          {
            name: 'Content-Length',
            value: '5984',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 16 May 2022 20:52:43 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'image/png',
          size: 5984,
          encoding: 'base64',
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 5984,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.475-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/images/favicon-green-19a39adc12.ico',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'image/avif,image/webp,*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'image/x-icon',
          },
          {
            name: 'Content-Length',
            value: '32988',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 16 May 2022 20:52:44 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'image/x-icon',
          size: 32988,
          encoding: 'base64',
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 32988,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.608-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-react-utils_es_getElementType_js-node_modules_instructure_ui-reac-84c87b-c-2df35feb37.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '17574',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 34031,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.612-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-i18n_es_bidirectional_js-node_modules_instructure_ui-testable_es_-425ca8-c-2d1fd98b4b.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '31486',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 61715,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.616-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-view_es_View_index_js-c-87cae79f27.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '61052',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 120168,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.618-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-prop-types_es_Children_js-c-2f295e68a6.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '14969',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 29307,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.621-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-a11y-utils_es_FocusRegionManager_js-node_modules_instructure_ui-p-a5b51d-c-16b20a7568.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '90871',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 178013,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.622-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-svg-images_es_SVGIcon_index_js-c-e00e89fbed.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '27696',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 54347,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.622-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-a11y-utils_es_hasVisibleChildren_js-node_modules_instructure_ui-c-2aee68-c-6f52737d11.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '67111',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 134609,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.627-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-color-utils_es_darken_js-node_modules_instructure_ui-flex_es_Flex-a66809-c-d4c3dde6cc.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '36075',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 71016,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.633-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-buttons_es_BaseButton_index_js-c-fc5e419857.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '45817',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 90184,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.636-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-buttons_es_Button_index_js-c-3b4fe42655.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '89914',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 177837,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.637-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/packages_jqueryui_button_js-c-4992e6de2a.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '16230',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 30607,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.644-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-motion_es_Transition_index_js-c-435287e6f1.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '39191',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 76888,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.647-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-buttons_es_CloseButton_index_js-c-321a91c991.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '23854',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 46875,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.649-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_debounce_es_debounce_js-node_modules_instructure_ui-dom-utils_es_get-79ad6c-c-b6a0337ecd.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '19454',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 38203,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.651-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/packages_jqueryui_dialog_js-c-cbf3060c42.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '121131',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 237582,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.654-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-grid_es_Grid_index_js-c-67556a1122.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '73244',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 144625,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.656-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-heading_es_Heading_index_js-c-2522d4e88d.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '22950',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 44991,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.658-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-text_es_Text_index_js-c-df575f44a2.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '20660',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 40779,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.660-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-form-field_es_index_js-c-2133a4110f.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '73679',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 144409,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.663-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-popover_es_Popover_index_js-c-3d0110d78b.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '157765',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 310355,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.664-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-spinner_es_Spinner_index_js-c-c54afd746d.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '19281',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 37907,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.667-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-text-input_es_TextInput_index_js-c-10c3ac0240.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '30085',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 59287,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.668-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_format-message_index_js-c-f0e4e28e2c.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '57765',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 113632,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.673-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-alerts_es_Alert_index_js-c-35ab083473.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '43725',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 85884,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.676-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/ui_shared_jquery_jquery_instructure_misc_plugins_js-c-eb4a3ad6a0.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '22704',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 44751,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.677-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-modal_es_Modal_index_js-c-269a9f0230.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '86187',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 169133,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.678-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_lodash_lodash_js-c-4c64a6c2a2.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '563009',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 1108243,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.682-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_axios_index_js-c-bae2fc8558.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '54919',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 107460,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.684-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-selectable_es_Selectable_index_js-c-e12ced411c.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '20478',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 40395,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.685-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-select_es_Select_index_js-c-404cbcd452.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '99244',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 194905,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.685-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-checkbox_es_Checkbox_index_js-c-b1e8579bfb.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '58216',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 114204,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.688-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-truncate-text_es_TruncateText_index_js-c-4905b4aae7.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '62216',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 121820,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.690-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_react-redux_es_index_js-node_modules_redux-thunk_es_index_js-c-482957a7c4.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '86529',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 196245,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.692-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_babel_runtime-corejs3_core-js-stable_instance_includes_js-c-41f96c39b6.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '65016',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 125056,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.694-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-list_es_List_index_js-c-4373b2e3f2.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '65601',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 128856,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.698-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-table_es_Table_index_js-c-ff66089ae5.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '99832',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 195949,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.698-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/packages_k5uploader_es_k5uploader_js-c-278d4e69cb.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '67379',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:49 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 132189,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.702-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/packages_canvas-rce_es_rcs_api_js-packages_canvas-rce_es_sidebar_actions_upload_js-packages_c-cf5a9b-c-aa33601000.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '214594',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Wed, 12 Oct 2022 13:40:11 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 420369,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.703-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-forms_node_modules_instructure_ui-dom-utils_es_isActiveElement_js-992e69-c-959cbaf5db.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '636171',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:49 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 1230853,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.704-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/packages_canvas-rce_es_rce_plugins_instructure_image_ImageEmbedOptions_js-packages_canvas-rce-ce1a69-c-3bd6bcbac8.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '137181',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Fri, 07 Oct 2022 15:14:18 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 268539,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.705-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_lodash__baseIsEqual_js-c-3c71cbb6a5.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '59071',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:49 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 117356,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.707-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/packages_canvas-rce_es_rce_contentRendering_js-c-407cd7506f.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '230533',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Wed, 12 Oct 2022 13:40:11 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 453249,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.708-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_aphrodite_es_index_js-c-d5ad48c747.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '85941',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:49 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 178501,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.709-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_lodash__baseClone_js-node_modules_lodash__baseRest_js-node_modules_lodash_isArra-9a8ed3-c-f2fcfb75b6.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '48869',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Fri, 07 Oct 2022 15:14:18 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 96668,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.712-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_tinymce_tinymce_js-c-830d4c3549.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '1110958',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 2190716,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.717-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-icons_es_svg_index_js-c-de9c84656a.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '1040623',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 19 Sep 2022 14:16:20 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 2046694,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.718-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_tinymce-a11y-checker_lib_modules_plugin_js-c-cd59384731.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '582695',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Fri, 07 Oct 2022 15:14:18 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 1335435,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.720-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-badge_es_Badge_index_js-node_modules_instructure_ui-icons_es_Icon-04c387-c-56bb643842.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '72982',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Fri, 07 Oct 2022 15:14:18 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 143537,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.720-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/packages_canvas-rce_es_rce_tinyRCE_js-c-dea49d3e02.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '2169572',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Wed, 12 Oct 2022 13:40:11 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 3859740,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.722-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_format-message-generate-id_underscored_crc32_js-packages_canvas-rce_es_getTransl-c5a13b-c-d9ad38bfdb.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '676654',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Wed, 12 Oct 2022 13:40:11 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 1331355,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.722-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/packages_jqueryui_tabs_js-c-f28c25137b.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '46977',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:49 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 88692,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.723-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/packages_jqueryui_sortable_js-c-cfe6bb5c97.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '49269',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:49 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 94960,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.725-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-tree-browser_es_TreeBrowser_index_js-c-b33603e4f1.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '113053',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Fri, 07 Oct 2022 15:14:18 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 221986,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.727-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-buttons_es_IconButton_index_js-node_modules_instructure_ui-radio--535431-c-cc9b06cf1a.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '79909',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Wed, 12 Oct 2022 13:40:11 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 161953,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.729-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-a11y-content_es_PresentationContent_index_js-node_modules_instruc-0ed9a7-c-f1cf755b4f.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '167895',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Tue, 18 Oct 2022 18:33:18 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 329944,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.731-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-icons_es_IconCheckSolid_js-node_modules_instructure_ui-icons_es_I-b20e9a-c-5de1f3780c.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '150894',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Fri, 07 Oct 2022 15:14:19 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 296611,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.731-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-icons_es_IconPlusSolid_js-node_modules_instructure_ui-icons_es_Ic-1c9624-c-4ba09f9ce3.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '78082',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Fri, 07 Oct 2022 15:14:19 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 153137,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.733-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-billboard_es_Billboard_index_js-ui_shared_alerts_react_FlashAlert-abdb6e-c-f97d0798f9.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '63950',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Fri, 07 Oct 2022 15:14:19 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 125920,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.734-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/[request]-c-6bb6cd2453.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '433698',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Fri, 07 Oct 2022 15:14:18 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 511170,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.783-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/ui_boot_initializers_showBadgeCounts_js-c-87e308a47d.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:15 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '2517',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:47 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 5007,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.784-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/javascripts/translations/en-888412cb6b.json',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'application/json+canvas-string-ids, application/json',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'X-Requested-With',
            value: 'XMLHttpRequest',
          },
          {
            name: 'X-CSRF-Token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/json',
          },
          {
            name: 'Content-Length',
            value: '20612',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 20:09:26 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/json',
          size: 20612,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 20612,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.803-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/ui_shared_media-comments_jquery_index_js-c-47dab7049a.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '380751',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 07 Nov 2022 14:19:29 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 720785,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.803-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/packages_jquery-kyle-menu_index_js-c-94f73e06a4.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '49863',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:49 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 114820,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.804-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/ui_boot_initializers_runOnEveryPageButDontBlockAnythingElse_js-c-6e1f9a51b9.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '50962',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Wed, 12 Oct 2022 13:40:10 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 96888,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.824-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/ui_shared_util_TextHelper_ts-c-6fa9810ead.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:15 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '445019',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 873060,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.825-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/ui_shared_handlebars-helpers_index_coffee-c-c0fb9f2886.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:15 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '64196',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 125764,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.838-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/ui_shared_module-sequence-footer_jquery_index_js-c-3ae0fd495d.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:36 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '23476',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 23476,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 23476,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.843-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/external_tools_show-c-aa2af24a47.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:35 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '37783',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Mon, 07 Nov 2022 14:19:29 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 74000,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.846-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/external_tool_redirect-c-a03f5337d7.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:35 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '5591',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Wed, 12 Oct 2022 13:40:10 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 10927,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.851-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-position_es_mirrorPlacement_js-node_modules_instructure_ui-toolti-bbd861-c-15eb746fcb.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '23106',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:49 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 45483,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.852-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/module_sequence_footer-c-141a1a71b5.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:35 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '62112',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 128416,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.854-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-pill_es_Pill_index_js-c-357c82ba5a.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '16953',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:49 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 33379,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.855-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_instructure_ui-dom-utils_es_findFocusable_js-ui_shared_tour-pubsub_index_js-c-07fc7a6b10.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '19779',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:49 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 32323,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.856-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/navigation_header-c-771445ad94.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:06 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '141450',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Wed, 12 Oct 2022 13:40:10 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 280147,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:19.975-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/dist/webpack-dev/node_modules_mediaelement_build_lang_me-i18n-locale-en_js-c-c87dea5d00.js',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: '*/*',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:53:07 GMT',
          },
          {
            name: 'Content-Type',
            value: 'application/javascript',
          },
          {
            name: 'Content-Length',
            value: '3515',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Last-Modified',
            value: 'Thu, 08 Sep 2022 16:11:48 GMT',
          },
          {
            name: 'ETag',
            value: '',
          },
          {
            name: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'application/javascript',
          size: 0,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 6771,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'insecure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:20.053-05:00',
      request: {
        bodySize: 731,
        method: 'POST',
        url: 'http://lti13testtool.docker/login',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'lti13testtool.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Content-Type',
            value: 'application/x-www-form-urlencoded',
          },
          {
            name: 'Content-Length',
            value: '731',
          },
          {
            name: 'Origin',
            value: 'http://testsite.canvas.docker',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/',
          },
          {
            name: 'Cookie',
            value: 'my_secret_session=c48466bf-b266-4240-9ac7-dc383b33320b',
          },
          {
            name: 'Upgrade-Insecure-Requests',
            value: '1',
          },
        ],
        cookies: [
          {
            name: 'my_secret_session',
            value: 'c48466bf-b266-4240-9ac7-dc383b33320b',
          },
        ],
        queryString: [],
        headersSize: 578,
        postData: {
          mimeType: 'application/x-www-form-urlencoded',
          params: [
            {
              name: 'iss',
              value: 'https://canvas.instructure.com',
            },
            {
              name: 'login_hint',
              value: '535fa085f22b4655f48cd5a36a9215f64c062838',
            },
            {
              name: 'client_id',
              value: '10000000000003',
            },
            {
              name: 'target_link_uri',
              value:
                'http://lti13testtool.docker/launch?deep_link_location=MydA9LI4y0',
            },
            {
              name: 'lti_message_hint',
              value:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJpZmllciI6IjdmYTUyMDNhZjhhNzk2NzY4NWM1YWE5NDY1NzMzMmY5ODVhNzI2NWZhMWQyZjc5ZDVmY2E1NmI0ZTFhYjA4Yjk5YmVmMGU3NzkyYzM3M2ZkMTUwZjZiZDczMjliYjRmOTBmZDIxNTdiYmUyNWRlNWZhMGNiYzM5Y2U4OGQyMmNiIiwiY2FudmFzX2RvbWFpbiI6InRlc3RzaXRlLmNhbnZhcy5kb2NrZXIiLCJjb250ZXh0X3R5cGUiOiJDb3Vyc2UiLCJjb250ZXh0X2lkIjoxMDAwMDAwMDAwMDAwMiwiY2FudmFzX2xvY2FsZSI6ImVuIiwiZXhwIjoxNjY3ODMzMjE5fQ.-Jl8LdiaIXJHuTJxqUcBw_-xhidPpc5IXGTk0jump2w',
            },
            {
              name: 'canvas_region',
              value: 'not_configured',
            },
            {
              name: 'lti_storage_target',
              value: '_parent',
            },
          ],
          text: 'iss=https%3A%2F%2Fcanvas.instructure.com&login_hint=535fa085f22b4655f48cd5a36a9215f64c062838&client_id=10000000000003&target_link_uri=http%3A%2F%2Flti13testtool.docker%2Flaunch%3Fdeep_link_location%3DMydA9LI4y0&lti_message_hint=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJpZmllciI6IjdmYTUyMDNhZjhhNzk2NzY4NWM1YWE5NDY1NzMzMmY5ODVhNzI2NWZhMWQyZjc5ZDVmY2E1NmI0ZTFhYjA4Yjk5YmVmMGU3NzkyYzM3M2ZkMTUwZjZiZDczMjliYjRmOTBmZDIxNTdiYmUyNWRlNWZhMGNiYzM5Y2U4OGQyMmNiIiwiY2FudmFzX2RvbWFpbiI6InRlc3RzaXRlLmNhbnZhcy5kb2NrZXIiLCJjb250ZXh0X3R5cGUiOiJDb3Vyc2UiLCJjb250ZXh0X2lkIjoxMDAwMDAwMDAwMDAwMiwiY2FudmFzX2xvY2FsZSI6ImVuIiwiZXhwIjoxNjY3ODMzMjE5fQ.-Jl8LdiaIXJHuTJxqUcBw_-xhidPpc5IXGTk0jump2w&canvas_region=not_configured&lti_storage_target=_parent',
        },
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:55:20 GMT',
          },
          {
            name: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
          {
            name: 'Transfer-Encoding',
            value: 'chunked',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Status',
            value: '200 OK',
          },
          {
            name: 'Cache-Control',
            value: 'max-age=0, private, must-revalidate',
          },
          {
            name: 'ETag',
            value: 'W/',
          },
          {
            name: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
          {
            name: 'X-Runtime',
            value: '0.011562',
          },
          {
            name: 'X-Request-Id',
            value: 'be1b81ac17d5cef9cbf80f8c94ed1ccf',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'text/html; charset=utf-8',
          size: 2757,
          text: '',
        },
        redirectURL: '',
        headersSize: 378,
        bodySize: 3135,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        connect: 0,
        ssl: 0,
        send: 0,
        wait: 17,
        receive: 0,
      },
      time: 17,
      _securityState: 'insecure',
      serverIPAddress: '192.168.42.42',
      connection: '80',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:20.151-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/api/v1/users/self/content_shares/unread_count',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'application/json+canvas-string-ids, application/json',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'X-Requested-With',
            value: 'XMLHttpRequest',
          },
          {
            name: 'X-CSRF-Token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: 'If-None-Match',
            value: 'W/',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 1614,
      },
      response: {
        status: 304,
        statusText: 'Not Modified',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:55:22 GMT',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Status',
            value: '304 Not Modified',
          },
          {
            name: 'X-Request-Cost',
            value: '0.022245476000238185',
          },
          {
            name: 'X-Session-Id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: 'Cache-Control',
            value: 'max-age=0, private, must-revalidate',
          },
          {
            name: 'X-Request-Context-Id',
            value: '95ad42dd-5c1f-4fba-8146-f4aafc351461',
          },
          {
            name: 'X-Rate-Limit-Remaining',
            value: '600.0',
          },
          {
            name: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            name: 'X-Canvas-Meta',
            value:
              'a=2;g=17P5H0jLBnqKyCQnQxreoDc6pTGinvqalU1sUjUj;s=1;c=development;o=content_shares;n=unread_count;b=863980;m=863980;u=0.02;y=0.00;d=0.00;',
          },
          {
            name: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            name: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            name: 'X-Canvas-User-Id',
            value: '10000000000001',
          },
          {
            name: 'X-Download-Options',
            value: 'noopen',
          },
          {
            name: 'ETag',
            value: 'W/',
          },
          {
            name: 'X-Runtime',
            value: '1.979500',
          },
          {
            name: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            name: 'Content-Security-Policy',
            value:
              "frame-ancestors 'self' testsite.canvas.docker staging.testsite.canvas.docker beta.testsite.canvas.docker test.testsite.canvas.docker qa.testsite.canvas.docker;",
          },
          {
            name: 'Set-Cookie',
            value:
              '_csrf_token=MQPMRsTmkhgObgW50PEeECPYsGFgmFcTnbZ%2BYsLC6aIIT7YTjLPHXWEAcs6%2FvE15W%2BCJEgbfBVvS8jQuj%2FulzA%3D%3D; path=/',
          },
          {
            name: 'Set-Cookie',
            value:
              'log_session_id=880de3bc9911286593ca422baadcf726; path=/; HttpOnly',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              'MQPMRsTmkhgObgW50PEeECPYsGFgmFcTnbZ+YsLC6aIIT7YTjLPHXWEAcs6/vE15W+CJEgbfBVvS8jQuj/ulzA==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
        ],
        content: {
          mimeType: 'application/json; charset=utf-8',
          size: 18,
          text: '',
        },
        redirectURL: '',
        headersSize: 1185,
        bodySize: 1203,
      },
      cache: {
        afterRequest: {
          expires: '4294967295',

          eTag: '',
          fetchCount: '',
          _dataSize: '',
          _lastModified: '1667832922',
          _device: '',
        },
      },
      timings: {
        blocked: -1,
        dns: 0,
        connect: 0,
        ssl: 0,
        send: 0,
        wait: 2848,
        receive: 0,
      },
      time: 2848,
      _securityState: 'insecure',
      serverIPAddress: '192.168.42.42',
      connection: '80',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:20.152-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/api/v1/conversations/unread_count',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'application/json+canvas-string-ids, application/json',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/courses/2/assignments/14',
          },
          {
            name: 'X-Requested-With',
            value: 'XMLHttpRequest',
          },
          {
            name: 'X-CSRF-Token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=7KlVtX3EA3MejiiMDEZcBA%2BxCmbc2kzRjy1n49xsdb7V5S%2FgNZFWNnHgX%2FtjCw9td4kzFbqdHpnAaS2vkVU50A%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: 'If-None-Match',
            value: 'W/',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              '7KlVtX3EA3MejiiMDEZcBA+xCmbc2kzRjy1n49xsdb7V5S/gNZFWNnHgX/tjCw9td4kzFbqdHpnAaS2vkVU50A==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [],
        headersSize: 1602,
      },
      response: {
        status: 304,
        statusText: 'Not Modified',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:55:22 GMT',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Status',
            value: '304 Not Modified',
          },
          {
            name: 'X-Request-Cost',
            value: '0.036580300999839555',
          },
          {
            name: 'X-Session-Id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: 'Cache-Control',
            value: 'max-age=0, private, must-revalidate',
          },
          {
            name: 'X-Request-Context-Id',
            value: '9b4fcd3c-73b8-4580-9dc2-ab87f8ef8784',
          },
          {
            name: 'X-Rate-Limit-Remaining',
            value: '550.325205587672',
          },
          {
            name: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            name: 'X-Canvas-Meta',
            value:
              'a=2;g=17P5H0jLBnqKyCQnQxreoDc6pTGinvqalU1sUjUj;s=1;c=development;o=conversations;n=unread_count;b=658688;m=658688;u=0.04;y=0.00;d=0.00;',
          },
          {
            name: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            name: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            name: 'X-Canvas-User-Id',
            value: '10000000000001',
          },
          {
            name: 'X-Download-Options',
            value: 'noopen',
          },
          {
            name: 'ETag',
            value: 'W/',
          },
          {
            name: 'X-Runtime',
            value: '1.961604',
          },
          {
            name: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            name: 'Content-Security-Policy',
            value:
              "frame-ancestors 'self' testsite.canvas.docker staging.testsite.canvas.docker beta.testsite.canvas.docker test.testsite.canvas.docker qa.testsite.canvas.docker;",
          },
          {
            name: 'Set-Cookie',
            value:
              '_csrf_token=uaG5%2BRBIRxPWtAXBNQHmdiQEsS4SXKPZNvCSOlzRk0eA7cOsWB0SVrnacrZaTLUfXDyIXXQb8ZF5tNh2EejfKQ%3D%3D; path=/',
          },
          {
            name: 'Set-Cookie',
            value:
              'log_session_id=880de3bc9911286593ca422baadcf726; path=/; HttpOnly',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              'uaG5+RBIRxPWtAXBNQHmdiQEsS4SXKPZNvCSOlzRk0eA7cOsWB0SVrnacrZaTLUfXDyIXXQb8ZF5tNh2EejfKQ==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
        ],
        content: {
          mimeType: 'application/json; charset=utf-8',
          size: 20,
          text: '{}',
        },
        redirectURL: '',
        headersSize: 1189,
        bodySize: 1209,
      },
      cache: {
        afterRequest: {
          expires: '4294967295',
          lastFetched: '',
          eTag: '',
          fetchCount: '',
          _dataSize: '',
          _lastModified: '1667832922',
          _device: '',
        },
      },
      timings: {
        blocked: -1,
        dns: 0,
        connect: 0,
        ssl: 0,
        send: 0,
        wait: 2828,
        receive: 0,
      },
      time: 2828,
      _securityState: 'insecure',
      serverIPAddress: '192.168.42.42',
      connection: '80',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:20.272-05:00',
      request: {
        bodySize: 922,
        method: 'POST',
        url: 'http://canvas.docker/api/lti/authorize_redirect',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Content-Type',
            value: 'application/x-www-form-urlencoded',
          },
          {
            name: 'Content-Length',
            value: '922',
          },
          {
            name: 'Origin',
            value: 'http://lti13testtool.docker',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Referer',
            value: 'http://lti13testtool.docker/',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=cWcb8g0Jjh4kklFEtFW9nvWG44LQW6FTrvfmRU9vykhJKlaxYUbALVLQIgrOBvXKzOXXqegC2QLCh5ECfSuLZw%3D%3D; log_session_id=6eb918c9fb9d768f79f361885580afa4; _legacy_normandy_session=J4NAHL_Z23FI8FmJkdVHWQ+maTWyMiXcuy4cn5KbO7PBx03IdTuVTnGoUcJKUd8qNdsmKGoYopTRcTlDx_lIHnpihNKjLYw0UdUfev5dy6XqW_sOQ8oNpoPYzQmEGA9wauAEdsLCS0kTHZ4GetlKg7GT2iUafCYTMuZSiBR75ZlR6xAIRXZ-V7WmH73MXtMIzFDj-yHFnOwQx1QwSWyPP_-kk6TMY-L43r5KjcllDz_bYb8dVQZDd8q8rH_OT8MxBFi1bx9oge1aitHeH8kckaT5FkHsWESkD-gThsq6LfRUK-kt9UkoDq-EDX64e7jWDsqDArUr0YhnAQhYaaJ6_fwCCTxckivS4eSzHcS1fzCL6JTHZTmtCxlWqRcITwq0AW09TWr5ru-87tqvismizHC.QhbjalveHlnhCfwfLI7CdLhToE0.Y2kbwA; _normandy_session=J4NAHL_Z23FI8FmJkdVHWQ+maTWyMiXcuy4cn5KbO7PBx03IdTuVTnGoUcJKUd8qNdsmKGoYopTRcTlDx_lIHnpihNKjLYw0UdUfev5dy6XqW_sOQ8oNpoPYzQmEGA9wauAEdsLCS0kTHZ4GetlKg7GT2iUafCYTMuZSiBR75ZlR6xAIRXZ-V7WmH73MXtMIzFDj-yHFnOwQx1QwSWyPP_-kk6TMY-L43r5KjcllDz_bYb8dVQZDd8q8rH_OT8MxBFi1bx9oge1aitHeH8kckaT5FkHsWESkD-gThsq6LfRUK-kt9UkoDq-EDX64e7jWDsqDArUr0YhnAQhYaaJ6_fwCCTxckivS4eSzHcS1fzCL6JTHZTmtCxlWqRcITwq0AW09TWr5ru-87tqvismizHC.QhbjalveHlnhCfwfLI7CdLhToE0.Y2kbwA',
          },
          {
            name: 'Upgrade-Insecure-Requests',
            value: '1',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              'cWcb8g0Jjh4kklFEtFW9nvWG44LQW6FTrvfmRU9vykhJKlaxYUbALVLQIgrOBvXKzOXXqegC2QLCh5ECfSuLZw==',
          },
          {
            name: 'log_session_id',
            value: '6eb918c9fb9d768f79f361885580afa4',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'J4NAHL_Z23FI8FmJkdVHWQ+maTWyMiXcuy4cn5KbO7PBx03IdTuVTnGoUcJKUd8qNdsmKGoYopTRcTlDx_lIHnpihNKjLYw0UdUfev5dy6XqW_sOQ8oNpoPYzQmEGA9wauAEdsLCS0kTHZ4GetlKg7GT2iUafCYTMuZSiBR75ZlR6xAIRXZ-V7WmH73MXtMIzFDj-yHFnOwQx1QwSWyPP_-kk6TMY-L43r5KjcllDz_bYb8dVQZDd8q8rH_OT8MxBFi1bx9oge1aitHeH8kckaT5FkHsWESkD-gThsq6LfRUK-kt9UkoDq-EDX64e7jWDsqDArUr0YhnAQhYaaJ6_fwCCTxckivS4eSzHcS1fzCL6JTHZTmtCxlWqRcITwq0AW09TWr5ru-87tqvismizHC.QhbjalveHlnhCfwfLI7CdLhToE0.Y2kbwA',
          },
          {
            name: '_normandy_session',
            value:
              'J4NAHL_Z23FI8FmJkdVHWQ+maTWyMiXcuy4cn5KbO7PBx03IdTuVTnGoUcJKUd8qNdsmKGoYopTRcTlDx_lIHnpihNKjLYw0UdUfev5dy6XqW_sOQ8oNpoPYzQmEGA9wauAEdsLCS0kTHZ4GetlKg7GT2iUafCYTMuZSiBR75ZlR6xAIRXZ-V7WmH73MXtMIzFDj-yHFnOwQx1QwSWyPP_-kk6TMY-L43r5KjcllDz_bYb8dVQZDd8q8rH_OT8MxBFi1bx9oge1aitHeH8kckaT5FkHsWESkD-gThsq6LfRUK-kt9UkoDq-EDX64e7jWDsqDArUr0YhnAQhYaaJ6_fwCCTxckivS4eSzHcS1fzCL6JTHZTmtCxlWqRcITwq0AW09TWr5ru-87tqvismizHC.QhbjalveHlnhCfwfLI7CdLhToE0.Y2kbwA',
          },
        ],
        queryString: [],
        headersSize: 1618,
        postData: {
          mimeType: 'application/x-www-form-urlencoded',
          params: [
            {
              name: 'utf8',
              value: '✓',
            },
            {
              name: 'authenticity_token',
              value:
                'QjnNxBlOCbPP6ebxJn3HW34CsocS6KidCDQQsI7HzvZKtXRTCRKwXdv0Aef3E2oSFZcn+aU+3OPZXjmS/DgF9w==',
            },
            {
              name: 'scope',
              value: 'openid',
            },
            {
              name: 'response_type',
              value: 'id_token',
            },
            {
              name: 'client_id',
              value: '10000000000003',
            },
            {
              name: 'redirect_uri',
              value:
                'http://lti13testtool.docker/launch?deep_link_location=MydA9LI4y0',
            },
            {
              name: 'login_hint',
              value: '535fa085f22b4655f48cd5a36a9215f64c062838',
            },
            {
              name: 'lti_message_hint',
              value:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJpZmllciI6IjdmYTUyMDNhZjhhNzk2NzY4NWM1YWE5NDY1NzMzMmY5ODVhNzI2NWZhMWQyZjc5ZDVmY2E1NmI0ZTFhYjA4Yjk5YmVmMGU3NzkyYzM3M2ZkMTUwZjZiZDczMjliYjRmOTBmZDIxNTdiYmUyNWRlNWZhMGNiYzM5Y2U4OGQyMmNiIiwiY2FudmFzX2RvbWFpbiI6InRlc3RzaXRlLmNhbnZhcy5kb2NrZXIiLCJjb250ZXh0X3R5cGUiOiJDb3Vyc2UiLCJjb250ZXh0X2lkIjoxMDAwMDAwMDAwMDAwMiwiY2FudmFzX2xvY2FsZSI6ImVuIiwiZXhwIjoxNjY3ODMzMjE5fQ.-Jl8LdiaIXJHuTJxqUcBw_-xhidPpc5IXGTk0jump2w',
            },
            {
              name: 'state',
              value: 'ee2c76f4-2810-416c-94cb-4d227048ec42',
            },
            {
              name: 'response_mode',
              value: 'form_post',
            },
            {
              name: 'nonce',
              value: '65320280-0158-48a2-b28e-74b1a9087775',
            },
            {
              name: 'prompt',
              value: 'none',
            },
          ],
          text: 'utf8=%E2%9C%93&authenticity_token=QjnNxBlOCbPP6ebxJn3HW34CsocS6KidCDQQsI7HzvZKtXRTCRKwXdv0Aef3E2oSFZcn%2BaU%2B3OPZXjmS%2FDgF9w%3D%3D&scope=openid&response_type=id_token&client_id=10000000000003&redirect_uri=http%3A%2F%2Flti13testtool.docker%2Flaunch%3Fdeep_link_location%3DMydA9LI4y0&login_hint=535fa085f22b4655f48cd5a36a9215f64c062838&lti_message_hint=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJpZmllciI6IjdmYTUyMDNhZjhhNzk2NzY4NWM1YWE5NDY1NzMzMmY5ODVhNzI2NWZhMWQyZjc5ZDVmY2E1NmI0ZTFhYjA4Yjk5YmVmMGU3NzkyYzM3M2ZkMTUwZjZiZDczMjliYjRmOTBmZDIxNTdiYmUyNWRlNWZhMGNiYzM5Y2U4OGQyMmNiIiwiY2FudmFzX2RvbWFpbiI6InRlc3RzaXRlLmNhbnZhcy5kb2NrZXIiLCJjb250ZXh0X3R5cGUiOiJDb3Vyc2UiLCJjb250ZXh0X2lkIjoxMDAwMDAwMDAwMDAwMiwiY2FudmFzX2xvY2FsZSI6ImVuIiwiZXhwIjoxNjY3ODMzMjE5fQ.-Jl8LdiaIXJHuTJxqUcBw_-xhidPpc5IXGTk0jump2w&state=ee2c76f4-2810-416c-94cb-4d227048ec42&response_mode=form_post&nonce=65320280-0158-48a2-b28e-74b1a9087775&prompt=none',
        },
      },
      response: {
        status: 302,
        statusText: 'Found',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:55:23 GMT',
          },
          {
            name: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
          {
            name: 'Transfer-Encoding',
            value: 'chunked',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Status',
            value: '302 Found',
          },
          {
            name: 'X-Request-Cost',
            value: '0.023190000000000044',
          },
          {
            name: 'X-Session-Id',
            value: '6eb918c9fb9d768f79f361885580afa4',
          },
          {
            name: 'Cache-Control',
            value: 'no-cache',
          },
          {
            name: 'X-Request-Context-Id',
            value: '417b898c-b2d1-4b7b-9ab3-912b7b5e0d55',
          },
          {
            name: 'X-Rate-Limit-Remaining',
            value: '600.0',
          },
          {
            name: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            name: 'X-Canvas-Meta',
            value:
              'a=1;g=0hPLSEy3GBiHWvmrfRng5Gwos9xEAHmAb8hjNzfL;s=1;c=development;o=lti/ims/authentication;n=authorize_redirect;b=662276;m=662276;u=0.02;y=0.00;d=0.00;',
          },
          {
            name: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            name: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            name: 'Location',
            value:
              'http://testsite.canvas.docker/api/lti/authorize?client_id=10000000000003&login_hint=535fa085f22b4655f48cd5a36a9215f64c062838&lti_message_hint=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJpZmllciI6IjdmYTUyMDNhZjhhNzk2NzY4NWM1YWE5NDY1NzMzMmY5ODVhNzI2NWZhMWQyZjc5ZDVmY2E1NmI0ZTFhYjA4Yjk5YmVmMGU3NzkyYzM3M2ZkMTUwZjZiZDczMjliYjRmOTBmZDIxNTdiYmUyNWRlNWZhMGNiYzM5Y2U4OGQyMmNiIiwiY2FudmFzX2RvbWFpbiI6InRlc3RzaXRlLmNhbnZhcy5kb2NrZXIiLCJjb250ZXh0X3R5cGUiOiJDb3Vyc2UiLCJjb250ZXh0X2lkIjoxMDAwMDAwMDAwMDAwMiwiY2FudmFzX2xvY2FsZSI6ImVuIiwiZXhwIjoxNjY3ODMzMjE5fQ.-Jl8LdiaIXJHuTJxqUcBw_-xhidPpc5IXGTk0jump2w&nonce=65320280-0158-48a2-b28e-74b1a9087775&prompt=none&redirect_uri=http%3A%2F%2Flti13testtool.docker%2Flaunch%3Fdeep_link_location%3DMydA9LI4y0&response_mode=form_post&response_type=id_token&scope=openid&state=ee2c76f4-2810-416c-94cb-4d227048ec42',
          },
          {
            name: 'X-Download-Options',
            value: 'noopen',
          },
          {
            name: 'X-Runtime',
            value: '2.087422',
          },
          {
            name: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            name: 'Content-Security-Policy',
            value: "frame-ancestors 'self' canvas.docker;",
          },
          {
            name: 'Set-Cookie',
            value:
              'log_session_id=6eb918c9fb9d768f79f361885580afa4; path=/; HttpOnly',
          },
        ],
        cookies: [
          {
            name: 'log_session_id',
            value: '6eb918c9fb9d768f79f361885580afa4',
          },
        ],
        content: {
          mimeType: 'text/html; charset=utf-8',
          size: 10097,
          comment: 'Response bodies are not included.',
        },
        redirectURL:
          'http://testsite.canvas.docker/api/lti/authorize?client_id=10000000000003&login_hint=535fa085f22b4655f48cd5a36a9215f64c062838&lti_message_hint=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJpZmllciI6IjdmYTUyMDNhZjhhNzk2NzY4NWM1YWE5NDY1NzMzMmY5ODVhNzI2NWZhMWQyZjc5ZDVmY2E1NmI0ZTFhYjA4Yjk5YmVmMGU3NzkyYzM3M2ZkMTUwZjZiZDczMjliYjRmOTBmZDIxNTdiYmUyNWRlNWZhMGNiYzM5Y2U4OGQyMmNiIiwiY2FudmFzX2RvbWFpbiI6InRlc3RzaXRlLmNhbnZhcy5kb2NrZXIiLCJjb250ZXh0X3R5cGUiOiJDb3Vyc2UiLCJjb250ZXh0X2lkIjoxMDAwMDAwMDAwMDAwMiwiY2FudmFzX2xvY2FsZSI6ImVuIiwiZXhwIjoxNjY3ODMzMjE5fQ.-Jl8LdiaIXJHuTJxqUcBw_-xhidPpc5IXGTk0jump2w&nonce=65320280-0158-48a2-b28e-74b1a9087775&prompt=none&redirect_uri=http%3A%2F%2Flti13testtool.docker%2Flaunch%3Fdeep_link_location%3DMydA9LI4y0&response_mode=form_post&response_type=id_token&scope=openid&state=ee2c76f4-2810-416c-94cb-4d227048ec42',
        headersSize: 1754,
        bodySize: 11851,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        connect: 0,
        ssl: 0,
        send: 0,
        wait: 2829,
        receive: 0,
      },
      time: 2829,
      _securityState: 'insecure',
      serverIPAddress: '192.168.42.42',
      connection: '80',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:23.104-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'http://testsite.canvas.docker/api/lti/authorize?client_id=10000000000003&login_hint=535fa085f22b4655f48cd5a36a9215f64c062838&lti_message_hint=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJpZmllciI6IjdmYTUyMDNhZjhhNzk2NzY4NWM1YWE5NDY1NzMzMmY5ODVhNzI2NWZhMWQyZjc5ZDVmY2E1NmI0ZTFhYjA4Yjk5YmVmMGU3NzkyYzM3M2ZkMTUwZjZiZDczMjliYjRmOTBmZDIxNTdiYmUyNWRlNWZhMGNiYzM5Y2U4OGQyMmNiIiwiY2FudmFzX2RvbWFpbiI6InRlc3RzaXRlLmNhbnZhcy5kb2NrZXIiLCJjb250ZXh0X3R5cGUiOiJDb3Vyc2UiLCJjb250ZXh0X2lkIjoxMDAwMDAwMDAwMDAwMiwiY2FudmFzX2xvY2FsZSI6ImVuIiwiZXhwIjoxNjY3ODMzMjE5fQ.-Jl8LdiaIXJHuTJxqUcBw_-xhidPpc5IXGTk0jump2w&nonce=65320280-0158-48a2-b28e-74b1a9087775&prompt=none&redirect_uri=http%3A%2F%2Flti13testtool.docker%2Flaunch%3Fdeep_link_location%3DMydA9LI4y0&response_mode=form_post&response_type=id_token&scope=openid&state=ee2c76f4-2810-416c-94cb-4d227048ec42',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'testsite.canvas.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Referer',
            value: 'http://lti13testtool.docker/',
          },
          {
            name: 'Cookie',
            value:
              '_csrf_token=MQPMRsTmkhgObgW50PEeECPYsGFgmFcTnbZ%2BYsLC6aIIT7YTjLPHXWEAcs6%2FvE15W%2BCJEgbfBVvS8jQuj%2FulzA%3D%3D; log_session_id=880de3bc9911286593ca422baadcf726; _legacy_normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g; _normandy_session=AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: 'Upgrade-Insecure-Requests',
            value: '1',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              'MQPMRsTmkhgObgW50PEeECPYsGFgmFcTnbZ+YsLC6aIIT7YTjLPHXWEAcs6/vE15W+CJEgbfBVvS8jQuj/ulzA==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: '_legacy_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
          {
            name: '_normandy_session',
            value:
              'AQWrzFpnD6zw49Jf6XtKNQ+BMH1W2ToDJTSC8GW0L3L57vCvpfmwy1PQS8O0vcisE0EvF_IBsjgI5aJal1ejQgk2fxYTaYzklyl7MKxit41a9g3LHQDkiUkl4vmllLxs6LpZn1ZKSxrqRZUdp3H04BStZI2hT70zo_NhH1GszlqtkIOzkUbNpjz-8SGcHLfUSphhPYFg1jql7t847IuP26BdKRpvFHOmS_Jb4MrJsoakw-kTh96b08yKEUyzmYBSi1iXeC_vtdlbmov4NthgA98R6EVKlLQyISIXLljfRVZCl21CglCrrCtjAA01UUPBLvlehuFgX5H2QcGu5Uq7rK_zxrZgUwYqEGVHBuZtvHrTw.77eTCRv5NP4VBLIfchslPcEwfwE.Y2kb0g',
          },
        ],
        queryString: [
          {
            name: 'client_id',
            value: '10000000000003',
          },
          {
            name: 'login_hint',
            value: '535fa085f22b4655f48cd5a36a9215f64c062838',
          },
          {
            name: 'lti_message_hint',
            value:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJpZmllciI6IjdmYTUyMDNhZjhhNzk2NzY4NWM1YWE5NDY1NzMzMmY5ODVhNzI2NWZhMWQyZjc5ZDVmY2E1NmI0ZTFhYjA4Yjk5YmVmMGU3NzkyYzM3M2ZkMTUwZjZiZDczMjliYjRmOTBmZDIxNTdiYmUyNWRlNWZhMGNiYzM5Y2U4OGQyMmNiIiwiY2FudmFzX2RvbWFpbiI6InRlc3RzaXRlLmNhbnZhcy5kb2NrZXIiLCJjb250ZXh0X3R5cGUiOiJDb3Vyc2UiLCJjb250ZXh0X2lkIjoxMDAwMDAwMDAwMDAwMiwiY2FudmFzX2xvY2FsZSI6ImVuIiwiZXhwIjoxNjY3ODMzMjE5fQ.-Jl8LdiaIXJHuTJxqUcBw_-xhidPpc5IXGTk0jump2w',
          },
          {
            name: 'nonce',
            value: '65320280-0158-48a2-b28e-74b1a9087775',
          },
          {
            name: 'prompt',
            value: 'none',
          },
          {
            name: 'redirect_uri',
            value:
              'http://lti13testtool.docker/launch?deep_link_location=MydA9LI4y0',
          },
          {
            name: 'response_mode',
            value: 'form_post',
          },
          {
            name: 'response_type',
            value: 'id_token',
          },
          {
            name: 'scope',
            value: 'openid',
          },
          {
            name: 'state',
            value: 'ee2c76f4-2810-416c-94cb-4d227048ec42',
          },
        ],
        headersSize: 2224,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:55:24 GMT',
          },
          {
            name: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
          {
            name: 'Transfer-Encoding',
            value: 'chunked',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Status',
            value: '200 OK',
          },
          {
            name: 'X-Request-Cost',
            value: '0.05874609400004971',
          },
          {
            name: 'X-Session-Id',
            value: '880de3bc9911286593ca422baadcf726',
          },
          {
            name: 'Cache-Control',
            value: 'max-age=0, private, must-revalidate',
          },
          {
            name: 'X-Request-Context-Id',
            value: '8fd58095-d217-4a17-816a-b02e2f668050',
          },
          {
            name: 'X-Rate-Limit-Remaining',
            value: '600.0',
          },
          {
            name: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            name: 'X-Canvas-Meta',
            value:
              'a=2;g=17P5H0jLBnqKyCQnQxreoDc6pTGinvqalU1sUjUj;s=1;c=development;o=lti/ims/authentication;n=authorize;t=Course;i=2;b=863980;m=863980;u=0.06;y=0.00;d=0.00;',
          },
          {
            name: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            name: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            name: 'X-Canvas-User-Id',
            value: '10000000000001',
          },
          {
            name: 'X-Download-Options',
            value: 'noopen',
          },
          {
            name: 'ETag',
            value: 'W/',
          },
          {
            name: 'X-Runtime',
            value: '0.851327',
          },
          {
            name: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            name: 'Content-Security-Policy',
            value:
              "frame-ancestors 'self' testsite.canvas.docker staging.testsite.canvas.docker beta.testsite.canvas.docker test.testsite.canvas.docker qa.testsite.canvas.docker;",
          },
          {
            name: 'Set-Cookie',
            value:
              '_csrf_token=BeZIArfIDZ4dGJ8IU2PA0ZD6lXf6cJpB0gBGuvE8OO48qjJX%2F51Y23J26H88LpO46MKsBJw3yAmdRAz2vAV0gA%3D%3D; path=/',
          },
          {
            name: 'Set-Cookie',
            value:
              'log_session_id=880de3bc9911286593ca422baadcf726; path=/; HttpOnly',
          },
        ],
        cookies: [
          {
            name: '_csrf_token',
            value:
              'BeZIArfIDZ4dGJ8IU2PA0ZD6lXf6cJpB0gBGuvE8OO48qjJX/51Y23J26H88LpO46MKsBJw3yAmdRAz2vAV0gA==',
          },
          {
            name: 'log_session_id',
            value: '880de3bc9911286593ca422baadcf726',
          },
        ],
        content: {
          mimeType: 'text/html; charset=utf-8',
          size: 10097,
          text: '',
        },
        redirectURL: '',
        headersSize: 1244,
        bodySize: 11341,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        connect: 0,
        ssl: 0,
        send: 0,
        wait: 1249,
        receive: 0,
      },
      time: 1249,
      _securityState: 'insecure',
      serverIPAddress: '192.168.42.42',
      connection: '80',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:24.404-05:00',
      request: {
        bodySize: 4898,
        method: 'POST',
        url: 'http://lti13testtool.docker/launch?deep_link_location=MydA9LI4y0',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Host',
            value: 'lti13testtool.docker',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate',
          },
          {
            name: 'Content-Type',
            value: 'application/x-www-form-urlencoded',
          },
          {
            name: 'Content-Length',
            value: '4898',
          },
          {
            name: 'Origin',
            value: 'http://testsite.canvas.docker',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Referer',
            value: 'http://testsite.canvas.docker/',
          },
          {
            name: 'Cookie',
            value: 'my_secret_session=c48466bf-b266-4240-9ac7-dc383b33320b',
          },
          {
            name: 'Upgrade-Insecure-Requests',
            value: '1',
          },
        ],
        cookies: [
          {
            name: 'my_secret_session',
            value: 'c48466bf-b266-4240-9ac7-dc383b33320b',
          },
        ],
        queryString: [
          {
            name: 'deep_link_location',
            value: 'MydA9LI4y0',
          },
        ],
        headersSize: 610,
        postData: {
          mimeType: 'application/x-www-form-urlencoded',
          params: [
            {
              name: 'utf8',
              value: '✓',
            },
            {
              name: 'authenticity_token',
              value:
                'BeZIArfIDZ4dGJ8IU2PA0ZD6lXf6cJpB0gBGuvE8OO48qjJX/51Y23J26H88LpO46MKsBJw3yAmdRAz2vAV0gA==',
            },
            {
              name: 'id_token',
              value:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDYtMThUMjI6MzM6MjBaIn0.eyJodHRwczovL3B1cmwuaW1zZ2xvYmFsLm9yZy9zcGVjL2x0aS9jbGFpbS9tZXNzYWdlX3R5cGUiOiJMdGlSZXNvdXJjZUxpbmtSZXF1ZXN0IiwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGkvY2xhaW0vdmVyc2lvbiI6IjEuMy4wIiwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGkvY2xhaW0vcmVzb3VyY2VfbGluayI6eyJpZCI6IjgwMDI5ODEzLTQwNTgtNDgxOC1iZDAxLWZiZGYwZTM1NDFkNyIsImRlc2NyaXB0aW9uIjoiXHUwMDNjcFx1MDAzZUx0aSAxLjMgVG9vbCBUZXh0XHUwMDNjL3BcdTAwM2UiLCJ0aXRsZSI6Ikx0aSAxLjMgVG9vbCBUaXRsZSIsInZhbGlkYXRpb25fY29udGV4dCI6bnVsbCwiZXJyb3JzIjp7ImVycm9ycyI6e319fSwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGktYWdzL2NsYWltL2VuZHBvaW50Ijp7ImxpbmVpdGVtIjoiaHR0cDovL3Rlc3RzaXRlLmNhbnZhcy5kb2NrZXIvYXBpL2x0aS9jb3Vyc2VzLzIvbGluZV9pdGVtcy85Iiwic2NvcGUiOlsiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGktYWdzL3Njb3BlL2xpbmVpdGVtIiwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGktYWdzL3Njb3BlL3Jlc3VsdC5yZWFkb25seSIsImh0dHBzOi8vcHVybC5pbXNnbG9iYWwub3JnL3NwZWMvbHRpLWFncy9zY29wZS9zY29yZSIsImh0dHBzOi8vY2FudmFzLmluc3RydWN0dXJlLmNvbS9sdGktYWdzL3Byb2dyZXNzL3Njb3BlL3Nob3ciXSwibGluZWl0ZW1zIjoiaHR0cDovL3Rlc3RzaXRlLmNhbnZhcy5kb2NrZXIvYXBpL2x0aS9jb3Vyc2VzLzIvbGluZV9pdGVtcyIsInZhbGlkYXRpb25fY29udGV4dCI6bnVsbCwiZXJyb3JzIjp7ImVycm9ycyI6e319fSwiYXVkIjoiMTAwMDAwMDAwMDAwMDMiLCJhenAiOiIxMDAwMDAwMDAwMDAwMyIsImh0dHBzOi8vcHVybC5pbXNnbG9iYWwub3JnL3NwZWMvbHRpL2NsYWltL2RlcGxveW1lbnRfaWQiOiIxMzpiODIyMjljNmUxMGJjYjg3YmViMWYxYjI4N2ZhZWU1NjBkZGMzMTA5IiwiZXhwIjoxNjY3ODM2NTE5LCJpYXQiOjE2Njc4MzI5MTksImlzcyI6Imh0dHBzOi8vY2FudmFzLmluc3RydWN0dXJlLmNvbSIsIm5vbmNlIjoiNjUzMjAyODAtMDE1OC00OGEyLWIyOGUtNzRiMWE5MDg3Nzc1Iiwic3ViIjoiMGU2OGU1OTYtZWFkZS00Zjk4LTgzMjItMzZlMDkwZGYwMWYyIiwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGkvY2xhaW0vdGFyZ2V0X2xpbmtfdXJpIjoiaHR0cDovL2x0aTEzdGVzdHRvb2wuZG9ja2VyL2xhdW5jaD9kZWVwX2xpbmtfbG9jYXRpb249TXlkQTlMSTR5MCIsInBpY3R1cmUiOiJodHRwOi8vY2FudmFzLmluc3RydWN0dXJlLmNvbS9pbWFnZXMvbWVzc2FnZXMvYXZhdGFyLTUwLnBuZyIsImVtYWlsIjoicGF1bC5ncmF5QGluc3RydWN0dXJlLmNvbSIsIm5hbWUiOiJwYXVsLmdyYXlAaW5zdHJ1Y3R1cmUuY29tIiwiZ2l2ZW5fbmFtZSI6InBhdWwuZ3JheUBpbnN0cnVjdHVyZS5jb20iLCJmYW1pbHlfbmFtZSI6IiIsImh0dHBzOi8vcHVybC5pbXNnbG9iYWwub3JnL3NwZWMvbHRpL2NsYWltL2xpcyI6eyJwZXJzb25fc291cmNlZGlkIjpudWxsLCJjb3Vyc2Vfb2ZmZXJpbmdfc291cmNlZGlkIjpudWxsLCJ2YWxpZGF0aW9uX2NvbnRleHQiOm51bGwsImVycm9ycyI6eyJlcnJvcnMiOnt9fX0sImh0dHBzOi8vcHVybC5pbXNnbG9iYWwub3JnL3NwZWMvbHRpL2NsYWltL2NvbnRleHQiOnsiaWQiOiJmOTczMzBhOTY0NTJmYzM2M2EzNGUwZWY2ZDhkMGQzZTllMTAwN2QyIiwibGFiZWwiOiJURVNUIiwidGl0bGUiOiJUZXN0IENvdXJzZSIsInR5cGUiOlsiaHR0cDovL3B1cmwuaW1zZ2xvYmFsLm9yZy92b2NhYi9saXMvdjIvY291cnNlI0NvdXJzZU9mZmVyaW5nIl0sInZhbGlkYXRpb25fY29udGV4dCI6bnVsbCwiZXJyb3JzIjp7ImVycm9ycyI6e319fSwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGkvY2xhaW0vdG9vbF9wbGF0Zm9ybSI6eyJndWlkIjoiMTdQNUgwakxCbnFLeUNRblF4cmVvRGM2cFRHaW52cWFsVTFzVWpVajpjYW52YXMtbG1zIiwibmFtZSI6IlRlc3QgU2l0ZSIsInZlcnNpb24iOiJjbG91ZCIsInByb2R1Y3RfZmFtaWx5X2NvZGUiOiJjYW52YXMiLCJ2YWxpZGF0aW9uX2NvbnRleHQiOm51bGwsImVycm9ycyI6eyJlcnJvcnMiOnt9fX0sImh0dHBzOi8vcHVybC5pbXNnbG9iYWwub3JnL3NwZWMvbHRpL2NsYWltL2xhdW5jaF9wcmVzZW50YXRpb24iOnsiZG9jdW1lbnRfdGFyZ2V0IjoiaWZyYW1lIiwicmV0dXJuX3VybCI6Imh0dHA6Ly90ZXN0c2l0ZS5jYW52YXMuZG9ja2VyL2NvdXJzZXMvMi9leHRlcm5hbF9jb250ZW50L3N1Y2Nlc3MvZXh0ZXJuYWxfdG9vbF9yZWRpcmVjdCIsImxvY2FsZSI6ImVuIiwiaGVpZ2h0Ijo1MDAsIndpZHRoIjo1MDAsInZhbGlkYXRpb25fY29udGV4dCI6bnVsbCwiZXJyb3JzIjp7ImVycm9ycyI6e319fSwibG9jYWxlIjoiZW4iLCJodHRwczovL3B1cmwuaW1zZ2xvYmFsLm9yZy9zcGVjL2x0aS9jbGFpbS9yb2xlcyI6WyJodHRwOi8vcHVybC5pbXNnbG9iYWwub3JnL3ZvY2FiL2xpcy92Mi9pbnN0aXR1dGlvbi9wZXJzb24jQWRtaW5pc3RyYXRvciIsImh0dHA6Ly9wdXJsLmltc2dsb2JhbC5vcmcvdm9jYWIvbGlzL3YyL3N5c3RlbS9wZXJzb24jU3lzQWRtaW4iLCJodHRwOi8vcHVybC5pbXNnbG9iYWwub3JnL3ZvY2FiL2xpcy92Mi9zeXN0ZW0vcGVyc29uI1VzZXIiXSwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGkvY2xhaW0vY3VzdG9tIjp7fSwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGktbnJwcy9jbGFpbS9uYW1lc3JvbGVzZXJ2aWNlIjp7ImNvbnRleHRfbWVtYmVyc2hpcHNfdXJsIjoiaHR0cDovL3Rlc3RzaXRlLmNhbnZhcy5kb2NrZXIvYXBpL2x0aS9jb3Vyc2VzLzIvbmFtZXNfYW5kX3JvbGVzIiwic2VydmljZV92ZXJzaW9ucyI6WyIyLjAiXSwidmFsaWRhdGlvbl9jb250ZXh0IjpudWxsLCJlcnJvcnMiOnsiZXJyb3JzIjp7fX19LCJodHRwczovL3B1cmwuaW1zZ2xvYmFsLm9yZy9zcGVjL2x0aS9jbGFpbS9sdGkxMV9sZWdhY3lfdXNlcl9pZCI6IjUzNWZhMDg1ZjIyYjQ2NTVmNDhjZDVhMzZhOTIxNWY2NGMwNjI4MzgiLCJodHRwczovL3B1cmwuaW1zZ2xvYmFsLm9yZy9zcGVjL2x0aS9jbGFpbS9sdGkxcDEiOnsicmVzb3VyY2VfbGlua19pZCI6IjM3NDYzMzYwY2NhZWZkODE5Y2Q5NDExZmE0OTA4YWNjYzFiMTU0YTciLCJ1c2VyX2lkIjoiNTM1ZmEwODVmMjJiNDY1NWY0OGNkNWEzNmE5MjE1ZjY0YzA2MjgzOCIsInZhbGlkYXRpb25fY29udGV4dCI6bnVsbCwiZXJyb3JzIjp7ImVycm9ycyI6e319fSwiZXJyb3JzIjp7ImVycm9ycyI6e319LCJodHRwczovL3d3dy5pbnN0cnVjdHVyZS5jb20vcGxhY2VtZW50IjpudWxsfQ.cWT70cAim0e3d4vPumkpuxKI4bJWD4pCTzzOtfxtVpUp8snzR6XcQQ-rl4coZr2rHqfazLOrXNfhXhOap5cGXg',
            },
            {
              name: 'state',
              value: 'ee2c76f4-2810-416c-94cb-4d227048ec42',
            },
          ],
          text: 'utf8=%E2%9C%93&authenticity_token=BeZIArfIDZ4dGJ8IU2PA0ZD6lXf6cJpB0gBGuvE8OO48qjJX%2F51Y23J26H88LpO46MKsBJw3yAmdRAz2vAV0gA%3D%3D&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDYtMThUMjI6MzM6MjBaIn0.eyJodHRwczovL3B1cmwuaW1zZ2xvYmFsLm9yZy9zcGVjL2x0aS9jbGFpbS9tZXNzYWdlX3R5cGUiOiJMdGlSZXNvdXJjZUxpbmtSZXF1ZXN0IiwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGkvY2xhaW0vdmVyc2lvbiI6IjEuMy4wIiwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGkvY2xhaW0vcmVzb3VyY2VfbGluayI6eyJpZCI6IjgwMDI5ODEzLTQwNTgtNDgxOC1iZDAxLWZiZGYwZTM1NDFkNyIsImRlc2NyaXB0aW9uIjoiXHUwMDNjcFx1MDAzZUx0aSAxLjMgVG9vbCBUZXh0XHUwMDNjL3BcdTAwM2UiLCJ0aXRsZSI6Ikx0aSAxLjMgVG9vbCBUaXRsZSIsInZhbGlkYXRpb25fY29udGV4dCI6bnVsbCwiZXJyb3JzIjp7ImVycm9ycyI6e319fSwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGktYWdzL2NsYWltL2VuZHBvaW50Ijp7ImxpbmVpdGVtIjoiaHR0cDovL3Rlc3RzaXRlLmNhbnZhcy5kb2NrZXIvYXBpL2x0aS9jb3Vyc2VzLzIvbGluZV9pdGVtcy85Iiwic2NvcGUiOlsiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGktYWdzL3Njb3BlL2xpbmVpdGVtIiwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGktYWdzL3Njb3BlL3Jlc3VsdC5yZWFkb25seSIsImh0dHBzOi8vcHVybC5pbXNnbG9iYWwub3JnL3NwZWMvbHRpLWFncy9zY29wZS9zY29yZSIsImh0dHBzOi8vY2FudmFzLmluc3RydWN0dXJlLmNvbS9sdGktYWdzL3Byb2dyZXNzL3Njb3BlL3Nob3ciXSwibGluZWl0ZW1zIjoiaHR0cDovL3Rlc3RzaXRlLmNhbnZhcy5kb2NrZXIvYXBpL2x0aS9jb3Vyc2VzLzIvbGluZV9pdGVtcyIsInZhbGlkYXRpb25fY29udGV4dCI6bnVsbCwiZXJyb3JzIjp7ImVycm9ycyI6e319fSwiYXVkIjoiMTAwMDAwMDAwMDAwMDMiLCJhenAiOiIxMDAwMDAwMDAwMDAwMyIsImh0dHBzOi8vcHVybC5pbXNnbG9iYWwub3JnL3NwZWMvbHRpL2NsYWltL2RlcGxveW1lbnRfaWQiOiIxMzpiODIyMjljNmUxMGJjYjg3YmViMWYxYjI4N2ZhZWU1NjBkZGMzMTA5IiwiZXhwIjoxNjY3ODM2NTE5LCJpYXQiOjE2Njc4MzI5MTksImlzcyI6Imh0dHBzOi8vY2FudmFzLmluc3RydWN0dXJlLmNvbSIsIm5vbmNlIjoiNjUzMjAyODAtMDE1OC00OGEyLWIyOGUtNzRiMWE5MDg3Nzc1Iiwic3ViIjoiMGU2OGU1OTYtZWFkZS00Zjk4LTgzMjItMzZlMDkwZGYwMWYyIiwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGkvY2xhaW0vdGFyZ2V0X2xpbmtfdXJpIjoiaHR0cDovL2x0aTEzdGVzdHRvb2wuZG9ja2VyL2xhdW5jaD9kZWVwX2xpbmtfbG9jYXRpb249TXlkQTlMSTR5MCIsInBpY3R1cmUiOiJodHRwOi8vY2FudmFzLmluc3RydWN0dXJlLmNvbS9pbWFnZXMvbWVzc2FnZXMvYXZhdGFyLTUwLnBuZyIsImVtYWlsIjoicGF1bC5ncmF5QGluc3RydWN0dXJlLmNvbSIsIm5hbWUiOiJwYXVsLmdyYXlAaW5zdHJ1Y3R1cmUuY29tIiwiZ2l2ZW5fbmFtZSI6InBhdWwuZ3JheUBpbnN0cnVjdHVyZS5jb20iLCJmYW1pbHlfbmFtZSI6IiIsImh0dHBzOi8vcHVybC5pbXNnbG9iYWwub3JnL3NwZWMvbHRpL2NsYWltL2xpcyI6eyJwZXJzb25fc291cmNlZGlkIjpudWxsLCJjb3Vyc2Vfb2ZmZXJpbmdfc291cmNlZGlkIjpudWxsLCJ2YWxpZGF0aW9uX2NvbnRleHQiOm51bGwsImVycm9ycyI6eyJlcnJvcnMiOnt9fX0sImh0dHBzOi8vcHVybC5pbXNnbG9iYWwub3JnL3NwZWMvbHRpL2NsYWltL2NvbnRleHQiOnsiaWQiOiJmOTczMzBhOTY0NTJmYzM2M2EzNGUwZWY2ZDhkMGQzZTllMTAwN2QyIiwibGFiZWwiOiJURVNUIiwidGl0bGUiOiJUZXN0IENvdXJzZSIsInR5cGUiOlsiaHR0cDovL3B1cmwuaW1zZ2xvYmFsLm9yZy92b2NhYi9saXMvdjIvY291cnNlI0NvdXJzZU9mZmVyaW5nIl0sInZhbGlkYXRpb25fY29udGV4dCI6bnVsbCwiZXJyb3JzIjp7ImVycm9ycyI6e319fSwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGkvY2xhaW0vdG9vbF9wbGF0Zm9ybSI6eyJndWlkIjoiMTdQNUgwakxCbnFLeUNRblF4cmVvRGM2cFRHaW52cWFsVTFzVWpVajpjYW52YXMtbG1zIiwibmFtZSI6IlRlc3QgU2l0ZSIsInZlcnNpb24iOiJjbG91ZCIsInByb2R1Y3RfZmFtaWx5X2NvZGUiOiJjYW52YXMiLCJ2YWxpZGF0aW9uX2NvbnRleHQiOm51bGwsImVycm9ycyI6eyJlcnJvcnMiOnt9fX0sImh0dHBzOi8vcHVybC5pbXNnbG9iYWwub3JnL3NwZWMvbHRpL2NsYWltL2xhdW5jaF9wcmVzZW50YXRpb24iOnsiZG9jdW1lbnRfdGFyZ2V0IjoiaWZyYW1lIiwicmV0dXJuX3VybCI6Imh0dHA6Ly90ZXN0c2l0ZS5jYW52YXMuZG9ja2VyL2NvdXJzZXMvMi9leHRlcm5hbF9jb250ZW50L3N1Y2Nlc3MvZXh0ZXJuYWxfdG9vbF9yZWRpcmVjdCIsImxvY2FsZSI6ImVuIiwiaGVpZ2h0Ijo1MDAsIndpZHRoIjo1MDAsInZhbGlkYXRpb25fY29udGV4dCI6bnVsbCwiZXJyb3JzIjp7ImVycm9ycyI6e319fSwibG9jYWxlIjoiZW4iLCJodHRwczovL3B1cmwuaW1zZ2xvYmFsLm9yZy9zcGVjL2x0aS9jbGFpbS9yb2xlcyI6WyJodHRwOi8vcHVybC5pbXNnbG9iYWwub3JnL3ZvY2FiL2xpcy92Mi9pbnN0aXR1dGlvbi9wZXJzb24jQWRtaW5pc3RyYXRvciIsImh0dHA6Ly9wdXJsLmltc2dsb2JhbC5vcmcvdm9jYWIvbGlzL3YyL3N5c3RlbS9wZXJzb24jU3lzQWRtaW4iLCJodHRwOi8vcHVybC5pbXNnbG9iYWwub3JnL3ZvY2FiL2xpcy92Mi9zeXN0ZW0vcGVyc29uI1VzZXIiXSwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGkvY2xhaW0vY3VzdG9tIjp7fSwiaHR0cHM6Ly9wdXJsLmltc2dsb2JhbC5vcmcvc3BlYy9sdGktbnJwcy9jbGFpbS9uYW1lc3JvbGVzZXJ2aWNlIjp7ImNvbnRleHRfbWVtYmVyc2hpcHNfdXJsIjoiaHR0cDovL3Rlc3RzaXRlLmNhbnZhcy5kb2NrZXIvYXBpL2x0aS9jb3Vyc2VzLzIvbmFtZXNfYW5kX3JvbGVzIiwic2VydmljZV92ZXJzaW9ucyI6WyIyLjAiXSwidmFsaWRhdGlvbl9jb250ZXh0IjpudWxsLCJlcnJvcnMiOnsiZXJyb3JzIjp7fX19LCJodHRwczovL3B1cmwuaW1zZ2xvYmFsLm9yZy9zcGVjL2x0aS9jbGFpbS9sdGkxMV9sZWdhY3lfdXNlcl9pZCI6IjUzNWZhMDg1ZjIyYjQ2NTVmNDhjZDVhMzZhOTIxNWY2NGMwNjI4MzgiLCJodHRwczovL3B1cmwuaW1zZ2xvYmFsLm9yZy9zcGVjL2x0aS9jbGFpbS9sdGkxcDEiOnsicmVzb3VyY2VfbGlua19pZCI6IjM3NDYzMzYwY2NhZWZkODE5Y2Q5NDExZmE0OTA4YWNjYzFiMTU0YTciLCJ1c2VyX2lkIjoiNTM1ZmEwODVmMjJiNDY1NWY0OGNkNWEzNmE5MjE1ZjY0YzA2MjgzOCIsInZhbGlkYXRpb25fY29udGV4dCI6bnVsbCwiZXJyb3JzIjp7ImVycm9ycyI6e319fSwiZXJyb3JzIjp7ImVycm9ycyI6e319LCJodHRwczovL3d3dy5pbnN0cnVjdHVyZS5jb20vcGxhY2VtZW50IjpudWxsfQ.cWT70cAim0e3d4vPumkpuxKI4bJWD4pCTzzOtfxtVpUp8snzR6XcQQ-rl4coZr2rHqfazLOrXNfhXhOap5cGXg&state=ee2c76f4-2810-416c-94cb-4d227048ec42',
        },
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/1.1',
        headers: [
          {
            name: 'Server',
            value: 'nginx/1.21.6',
          },
          {
            name: 'Date',
            value: 'Mon, 07 Nov 2022 14:55:25 GMT',
          },
          {
            name: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
          {
            name: 'Transfer-Encoding',
            value: 'chunked',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Status',
            value: '200 OK',
          },
          {
            name: 'Cache-Control',
            value: 'max-age=0, private, must-revalidate',
          },
          {
            name: 'ETag',
            value: 'W/',
          },
          {
            name: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
          {
            name: 'X-Runtime',
            value: '1.329664',
          },
          {
            name: 'X-Request-Id',
            value: '4916b55b2e88b4f33fb27498760b5159',
          },
          {
            name: 'Set-Cookie',
            value:
              'my_secret_session=f665ab1c-d1ad-4933-b019-54aafc9b5c10; HttpOnly; SameSite=None',
          },
        ],
        cookies: [
          {
            name: 'my_secret_session',
            value: 'f665ab1c-d1ad-4933-b019-54aafc9b5c10',
          },
        ],
        content: {
          mimeType: 'text/html; charset=utf-8',
          size: 22229,
          text: '',
        },
        redirectURL: '',
        headersSize: 471,
        bodySize: 22700,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        connect: 0,
        ssl: 0,
        send: 0,
        wait: 1349,
        receive: 0,
      },
      time: 1349,
      _securityState: 'insecure',
      serverIPAddress: '192.168.42.42',
      connection: '80',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:25.809-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'https://unpkg.com/spectre.css/dist/spectre.min.css',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'Host',
            value: 'unpkg.com',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'text/css,*/*;q=0.1',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Referer',
            value: 'http://lti13testtool.docker/',
          },
          {
            name: 'Sec-Fetch-Dest',
            value: 'style',
          },
          {
            name: 'Sec-Fetch-Mode',
            value: 'no-cors',
          },
          {
            name: 'Sec-Fetch-Site',
            value: 'cross-site',
          },
        ],
        cookies: [],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 302,
        statusText: 'Found',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'date',
            value: 'Mon, 07 Nov 2022 14:55:20 GMT',
          },
          {
            name: 'content-type',
            value: 'text/plain; charset=utf-8',
          },
          {
            name: 'access-control-allow-origin',
            value: '*',
          },
          {
            name: 'cache-control',
            value: 'public, s-maxage=600, max-age=60',
          },
          {
            name: 'location',
            value: '/spectre.css@0.5.9/dist/spectre.min.css',
          },
          {
            name: 'vary',
            value: 'Accept, Accept-Encoding',
          },
          {
            name: 'via',
            value: '1.1 fly.io',
          },
          {
            name: 'fly-request-id',
            value: '01GH99DE4MZBAZKM2BPBTDG998-iad',
          },
          {
            name: 'cf-cache-status',
            value: 'EXPIRED',
          },
          {
            name: 'strict-transport-security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            name: 'x-content-type-options',
            value: 'nosniff',
          },
          {
            name: 'server',
            value: 'cloudflare',
          },
          {
            name: 'cf-ray',
            value: '7666e8c73f475758-IAD',
          },
          {
            name: 'X-Firefox-Spdy',
            value: 'h2',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'text/css; charset=utf-8',
          size: 46656,
          text: '',
        },
        redirectURL: '/spectre.css@0.5.9/dist/spectre.min.css',
        headersSize: 0,
        bodySize: 10173,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'secure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:25.811-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'https://unpkg.com/spectre.css/dist/spectre-exp.min.css',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'Host',
            value: 'unpkg.com',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'text/css,*/*;q=0.1',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Referer',
            value: 'http://lti13testtool.docker/',
          },
          {
            name: 'Sec-Fetch-Dest',
            value: 'style',
          },
          {
            name: 'Sec-Fetch-Mode',
            value: 'no-cors',
          },
          {
            name: 'Sec-Fetch-Site',
            value: 'cross-site',
          },
          {
            name: 'TE',
            value: 'trailers',
          },
        ],
        cookies: [],
        queryString: [],
        headersSize: 405,
      },
      response: {
        status: 302,
        statusText: 'Found',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'date',
            value: 'Mon, 07 Nov 2022 14:55:25 GMT',
          },
          {
            name: 'content-type',
            value: 'text/plain; charset=utf-8',
          },
          {
            name: 'access-control-allow-origin',
            value: '*',
          },
          {
            name: 'cache-control',
            value: 'public, s-maxage=600, max-age=60',
          },
          {
            name: 'location',
            value: '/spectre.css@0.5.9/dist/spectre-exp.min.css',
          },
          {
            name: 'vary',
            value: 'Accept, Accept-Encoding',
          },
          {
            name: 'via',
            value: '1.1 fly.io',
          },
          {
            name: 'fly-request-id',
            value: '01GH98VTPAVGY5ZWMY3E9EYRQ7-iad',
          },
          {
            name: 'cf-cache-status',
            value: 'HIT',
          },
          {
            name: 'age',
            value: '576',
          },
          {
            name: 'strict-transport-security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            name: 'x-content-type-options',
            value: 'nosniff',
          },
          {
            name: 'server',
            value: 'cloudflare',
          },
          {
            name: 'cf-ray',
            value: '7666e8eaaf2f5758-IAD',
          },
          {
            name: 'X-Firefox-Spdy',
            value: 'h2',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'text/css; charset=utf-8',
          size: 23711,
          comment: 'Response bodies are not included.',
        },
        redirectURL: '/spectre.css@0.5.9/dist/spectre-exp.min.css',
        headersSize: 538,
        bodySize: 4591,
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: 0,
        connect: 0,
        ssl: 0,
        send: 0,
        wait: 25,
        receive: 0,
      },
      time: 25,
      _securityState: 'secure',
      serverIPAddress: '104.16.122.175',
      connection: '443',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:25.812-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'https://unpkg.com/spectre.css/dist/spectre-icons.min.css',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'Host',
            value: 'unpkg.com',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'text/css,*/*;q=0.1',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Referer',
            value: 'http://lti13testtool.docker/',
          },
          {
            name: 'Sec-Fetch-Dest',
            value: 'style',
          },
          {
            name: 'Sec-Fetch-Mode',
            value: 'no-cors',
          },
          {
            name: 'Sec-Fetch-Site',
            value: 'cross-site',
          },
          {
            name: 'TE',
            value: 'trailers',
          },
        ],
        cookies: [],
        queryString: [],
        headersSize: 407,
      },
      response: {
        status: 302,
        statusText: 'Found',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'date',
            value: 'Mon, 07 Nov 2022 14:55:25 GMT',
          },
          {
            name: 'content-type',
            value: 'text/plain; charset=utf-8',
          },
          {
            name: 'access-control-allow-origin',
            value: '*',
          },
          {
            name: 'cache-control',
            value: 'public, s-maxage=600, max-age=60',
          },
          {
            name: 'location',
            value: '/spectre.css@0.5.9/dist/spectre-icons.min.css',
          },
          {
            name: 'vary',
            value: 'Accept, Accept-Encoding',
          },
          {
            name: 'via',
            value: '1.1 fly.io',
          },
          {
            name: 'fly-request-id',
            value: '01GH98VTPA0FD5HZ4M380G5RGB-iad',
          },
          {
            name: 'cf-cache-status',
            value: 'HIT',
          },
          {
            name: 'age',
            value: '579',
          },
          {
            name: 'strict-transport-security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            name: 'x-content-type-options',
            value: 'nosniff',
          },
          {
            name: 'server',
            value: 'cloudflare',
          },
          {
            name: 'cf-ray',
            value: '7666e8eaaf305758-IAD',
          },
          {
            name: 'X-Firefox-Spdy',
            value: 'h2',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'text/css; charset=utf-8',
          size: 8854,
          comment: 'Response bodies are not included.',
        },
        redirectURL: '/spectre.css@0.5.9/dist/spectre-icons.min.css',
        headersSize: 540,
        bodySize: 2235,
      },
      cache: {},
      timings: {
        blocked: -1,
        dns: 0,
        connect: 0,
        ssl: 0,
        send: 0,
        wait: 32,
        receive: 0,
      },
      time: 32,
      _securityState: 'secure',
      serverIPAddress: '104.16.122.175',
      connection: '443',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:25.815-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'https://unpkg.com/spectre.css@0.5.9/dist/spectre.min.css',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'Host',
            value: 'unpkg.com',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'text/css,*/*;q=0.1',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
          {
            name: 'Referer',
            value: 'http://lti13testtool.docker/',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Sec-Fetch-Dest',
            value: 'style',
          },
          {
            name: 'Sec-Fetch-Mode',
            value: 'no-cors',
          },
          {
            name: 'Sec-Fetch-Site',
            value: 'cross-site',
          },
        ],
        cookies: [],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'date',
            value: 'Mon, 07 Nov 2022 14:53:36 GMT',
          },
          {
            name: 'content-type',
            value: 'text/css; charset=utf-8',
          },
          {
            name: 'access-control-allow-origin',
            value: '*',
          },
          {
            name: 'cache-control',
            value: 'public, max-age=31536000',
          },
          {
            name: 'last-modified',
            value: 'Sat, 26 Oct 1985 08:15:00 GMT',
          },
          {
            name: 'etag',
            value: 'W/b640-gQ07fCV82R4u/3QXaqBjXwq8x+8',
          },
          {
            name: 'via',
            value: '1.1 fly.io',
          },
          {
            name: 'fly-request-id',
            value: '01FDSB77QZ4JHPKB624RKDV3Z1',
          },
          {
            name: 'cf-cache-status',
            value: 'HIT',
          },
          {
            name: 'age',
            value: '6578817',
          },
          {
            name: 'vary',
            value: 'Accept-Encoding',
          },
          {
            name: 'strict-transport-security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            name: 'x-content-type-options',
            value: 'nosniff',
          },
          {
            name: 'server',
            value: 'cloudflare',
          },
          {
            name: 'cf-ray',
            value: '7666e63f2e1a5758-IAD',
          },
          {
            name: 'content-encoding',
            value: 'br',
          },
          {
            name: 'X-Firefox-Spdy',
            value: 'h2',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'text/css; charset=utf-8',
          size: 46656,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 10173,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'secure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:25.836-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'https://unpkg.com/spectre.css@0.5.9/dist/spectre-exp.min.css',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'Host',
            value: 'unpkg.com',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'text/css,*/*;q=0.1',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
          {
            name: 'Referer',
            value: 'http://lti13testtool.docker/',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Sec-Fetch-Dest',
            value: 'style',
          },
          {
            name: 'Sec-Fetch-Mode',
            value: 'no-cors',
          },
          {
            name: 'Sec-Fetch-Site',
            value: 'cross-site',
          },
        ],
        cookies: [],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'date',
            value: 'Mon, 07 Nov 2022 14:53:36 GMT',
          },
          {
            name: 'content-type',
            value: 'text/css; charset=utf-8',
          },
          {
            name: 'access-control-allow-origin',
            value: '*',
          },
          {
            name: 'cache-control',
            value: 'public, max-age=31536000',
          },
          {
            name: 'last-modified',
            value: 'Sat, 26 Oct 1985 08:15:00 GMT',
          },
          {
            name: 'etag',
            value: 'W/',
          },
          {
            name: 'via',
            value: '1.1 fly.io',
          },
          {
            name: 'fly-request-id',
            value: '01FDSB760SK8C4BYFNHSKKD1DZ',
          },
          {
            name: 'cf-cache-status',
            value: 'HIT',
          },
          {
            name: 'age',
            value: '6579736',
          },
          {
            name: 'vary',
            value: 'Accept-Encoding',
          },
          {
            name: 'strict-transport-security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            name: 'x-content-type-options',
            value: 'nosniff',
          },
          {
            name: 'server',
            value: 'cloudflare',
          },
          {
            name: 'cf-ray',
            value: '7666e63f2e0a5758-IAD',
          },
          {
            name: 'content-encoding',
            value: 'br',
          },
          {
            name: 'X-Firefox-Spdy',
            value: 'h2',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'text/css; charset=utf-8',
          size: 23711,
          text: '',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 4053,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'secure',
    },
    {
      pageref: 'page_2',
      startedDateTime: '2022-11-07T09:55:25.843-05:00',
      request: {
        bodySize: 0,
        method: 'GET',
        url: 'https://unpkg.com/spectre.css@0.5.9/dist/spectre-icons.min.css',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'Host',
            value: 'unpkg.com',
          },
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0',
          },
          {
            name: 'Accept',
            value: 'text/css,*/*;q=0.1',
          },
          {
            name: 'Accept-Language',
            value: 'en-US,en;q=0.5',
          },
          {
            name: 'Accept-Encoding',
            value: 'gzip, deflate, br',
          },
          {
            name: 'Referer',
            value: 'http://lti13testtool.docker/',
          },
          {
            name: 'Connection',
            value: 'keep-alive',
          },
          {
            name: 'Sec-Fetch-Dest',
            value: 'style',
          },
          {
            name: 'Sec-Fetch-Mode',
            value: 'no-cors',
          },
          {
            name: 'Sec-Fetch-Site',
            value: 'cross-site',
          },
        ],
        cookies: [],
        queryString: [],
        headersSize: 0,
      },
      response: {
        status: 200,
        statusText: 'OK',
        httpVersion: 'HTTP/2',
        headers: [
          {
            name: 'date',
            value: 'Mon, 07 Nov 2022 14:53:36 GMT',
          },
          {
            name: 'content-type',
            value: 'text/css; charset=utf-8',
          },
          {
            name: 'access-control-allow-origin',
            value: '*',
          },
          {
            name: 'cache-control',
            value: 'public, max-age=31536000',
          },
          {
            name: 'last-modified',
            value: 'Sat, 26 Oct 1985 08:15:00 GMT',
          },
          {
            name: 'etag',
            value: 'W/',
          },
          {
            name: 'via',
            value: '1.1 fly.io',
          },
          {
            name: 'fly-request-id',
            value: '01FNE75EV8GZNW9ZV2SA6KH9F0',
          },
          {
            name: 'cf-cache-status',
            value: 'HIT',
          },
          {
            name: 'age',
            value: '29899253',
          },
          {
            name: 'vary',
            value: 'Accept-Encoding',
          },
          {
            name: 'strict-transport-security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            name: 'x-content-type-options',
            value: 'nosniff',
          },
          {
            name: 'server',
            value: 'cloudflare',
          },
          {
            name: 'cf-ray',
            value: '7666e63f1e055758-IAD',
          },
          {
            name: 'content-encoding',
            value: 'br',
          },
          {
            name: 'X-Firefox-Spdy',
            value: 'h2',
          },
        ],
        cookies: [],
        content: {
          mimeType: 'text/css; charset=utf-8',
          size: 8854,
          text: '/*! Spectre.css Icons v0.5.9 | MIT License | github.com/picturepan2/spectre */.icon{box-sizing:border-box;display:inline-block;font-size:inherit;font-style:normal;height:1em;position:relative;text-indent:-9999px;vertical-align:middle;width:1em}.icon::after,.icon::before{content:;height:.5em;top:.1em;width:.1rem}.icon-refresh::before{border:.1rem solid currentColor;border-radius:50%;border-right-color:transparent;height:1em;width:1em}.icon-refresh::after{border:.2em solid currentColor;border-left-color:transparent;border-top-color:transparent;height:0;left:80%;top:20%;width:0}.icon-search::before{border:.1rem solid currentColor;border-radius:50%;height:.75em;left:5%;top:5%;transform:translate(0,0) rotate(45deg);width:.75em}.icon-search::after{background:currentColor;height:.1rem;left:80%;top:80%;transform:translate(-50%,-50%) rotate(45deg);width:.4em}.icon-edit::before{border:.1rem solid currentColor;height:.4em;transform:translate(-40%,-60%) rotate(-45deg);width:.85em}.icon-edit::after{border:.15em solid currentColor;border-right-color:transparent;border-top-color:transparent;height:0;left:5%;top:95%;transform:translate(0,-100%);width:0}.icon-delete::before{border:.1rem solid currentColor;border-bottom-left-radius:.1rem;border-bottom-right-radius:.1rem;border-top:0;height:.75em;top:60%;width:.75em}.icon-delete::after{background:currentColor;box-shadow:-.25em .2em,.25em .2em;height:.1rem;top:.05rem;width:.5em}.icon-share{border:.1rem solid currentColor;border-radius:.1rem;border-right:0;border-top:0}.icon-share::before{border:.1rem solid currentColor;border-left:0;border-top:0;height:.4em;left:100%;top:.25em;transform:translate(-125%,-50%) rotate(-45deg);width:.4em}.icon-share::after{border:.1rem solid currentColor;border-bottom:0;border-radius:75% 0;border-right:0;height:.5em;width:.6em}.icon-flag::before{background:currentColor;height:1em;left:15%;width:.1rem}.icon-flag::after{border:.1rem solid currentColor;border-bottom-right-radius:.1rem;border-left:0;border-top-right-radius:.1rem;height:.65em;left:60%;top:35%;width:.8em}.icon-bookmark::before{border:.1rem solid currentColor;border-bottom:0;border-top-left-radius:.1rem;border-top-right-radius:.1rem;height:.9em;width:.8em}.icon-bookmark::after{border:.1rem solid currentColor;border-bottom:0;border-left:0;border-radius:.1rem;height:.5em;transform:translate(-50%,35%) rotate(-45deg) skew(15deg,15deg);width:.5em}.icon-download,.icon-upload{border-bottom:.1rem solid currentColor}.icon-download::before,.icon-upload::before{border:.1rem solid currentColor;border-bottom:0;border-right:0;height:.5em;transform:translate(-50%,-60%) rotate(-135deg);width:.5em}.icon-download::after,.icon-upload::after{background:currentColor;height:.6em;top:40%;width:.1rem}.icon-upload::before{transform:translate(-50%,-60%) rotate(45deg)}.icon-upload::after{top:50%}.icon-copy::before{border:.1rem solid currentColor;border-bottom:0;border-radius:.1rem;border-right:0;height:.8em;left:40%;top:35%;width:.8em}.icon-copy::after{border:.1rem solid currentColor;border-radius:.1rem;height:.8em;left:60%;top:60%;width:.8em}.icon-time{border:.1rem solid currentColor;border-radius:50%}.icon-time::before{background:currentColor;height:.4em;transform:translate(-50%,-75%);width:.1rem}.icon-time::after{background:currentColor;height:.3em;transform:translate(-50%,-75%) rotate(90deg);transform-origin:50% 90%;width:.1rem}.icon-mail::before{border:.1rem solid currentColor;border-radius:.1rem;height:.8em;width:1em}.icon-mail::after{border:.1rem solid currentColor;border-right:0;border-top:0;height:.5em;transform:translate(-50%,-90%) rotate(-45deg) skew(10deg,10deg);width:.5em}.icon-people::before{border:.1rem solid currentColor;border-radius:50%;height:.45em;top:25%;width:.45em}.icon-people::after{border:.1rem solid currentColor;border-radius:50% 50% 0 0;height:.4em;top:75%;width:.9em}.icon-message{border:.1rem solid currentColor;border-bottom:0;border-radius:.1rem;border-right:0}.icon-message::before{border:.1rem solid currentColor;border-bottom-right-radius:.1rem;border-left:0;border-top:0;height:.8em;left:65%;top:40%;width:.7em}.icon-message::after{background:currentColor;border-radius:.1rem;height:.3em;left:10%;top:100%;transform:translate(0,-90%) rotate(45deg);width:.1rem}.icon-photo{border:.1rem solid currentColor;border-radius:.1rem}.icon-photo::before{border:.1rem solid currentColor;border-radius:50%;height:.25em;left:35%;top:35%;width:.25em}.icon-photo::after{border:.1rem solid currentColor;border-bottom:0;border-left:0;height:.5em;left:60%;transform:translate(-50%,25%) rotate(-45deg);width:.5em}.icon-link::after,.icon-link::before{border:.1rem solid currentColor;border-radius:5em 0 0 5em;border-right:0;height:.5em;width:.75em}.icon-link::before{transform:translate(-70%,-45%) rotate(-45deg)}.icon-link::after{transform:translate(-30%,-55%) rotate(135deg)}.icon-location::before{border:.1rem solid currentColor;border-radius:50% 50% 50% 0;height:.8em;transform:translate(-50%,-60%) rotate(-45deg);width:.8em}.icon-location::after{border:.1rem solid currentColor;border-radius:50%;height:.2em;transform:translate(-50%,-80%);width:.2em}.icon-emoji{border:.1rem solid currentColor;border-radius:50%}.icon-emoji::before{border-radius:50%;box-shadow:-.17em -.1em,.17em -.1em;height:.15em;width:.15em}.icon-emoji::after{border:.1rem solid currentColor;border-bottom-color:transparent;border-radius:50%;border-right-color:transparent;height:.5em;transform:translate(-50%,-40%) rotate(-135deg);width:.5em}',
        },
        redirectURL: '',
        headersSize: 0,
        bodySize: 1695,
      },
      cache: {},
      timings: {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0,
      },
      time: 0,
      _securityState: 'secure',
    },
  ],
}
