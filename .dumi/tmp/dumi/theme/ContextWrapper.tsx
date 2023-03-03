// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from '/Users/zhanghaowen/Desktop/SXF-DESIGN/node_modules/.pnpm/dumi@2.1.14_6qu4yv6hwoqszipfct7w7cgcri/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // mark loading when route change, page component will set false when loaded
        setLoading(true);

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider
      value={{
        pkg: {
          name: 'SXF-DESIGN',
          description: 'SXF组件库',
          version: '1.0.0',
          license: 'ISC',
          author: '',
        },
        entryExports,
        demos,
        components,
        locales,
        loading,
        setLoading,
        themeConfig: {
          title: 'SXF Design',
          footer:
            'Copyright © 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
          prefersColor: { default: 'light', switch: true },
          name: 'SXF',
          carrier: 'dumi',
          hd: true,
          rtl: true,
          nav: [
            { title: '指南', link: '/guide' },
            { title: '组件', link: '/components/Button' },
          ],
        },
      }}
    >
      {outlet}
    </SiteContext.Provider>
  );
}
