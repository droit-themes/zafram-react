// vite.config.js
import { defineConfig, transformWithEsbuild } from "file:///F:/server_2021/htdocs/zafram-react/node_modules/vite/dist/node/index.js";
import react from "file:///F:/server_2021/htdocs/zafram-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/))
          return null;
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic"
        });
      }
    },
    react()
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxzZXJ2ZXJfMjAyMVxcXFxodGRvY3NcXFxcemFmcmFtLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxzZXJ2ZXJfMjAyMVxcXFxodGRvY3NcXFxcemFmcmFtLXJlYWN0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9zZXJ2ZXJfMjAyMS9odGRvY3MvemFmcmFtLXJlYWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0cmFuc2Zvcm1XaXRoRXNidWlsZCB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAndHJlYXQtanMtZmlsZXMtYXMtanN4JyxcclxuICAgICAgYXN5bmMgdHJhbnNmb3JtKGNvZGUsIGlkKSB7XHJcbiAgICAgICAgaWYgKCFpZC5tYXRjaCgvc3JjXFwvLipcXC5qcyQvKSkgIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgIC8vIFVzZSB0aGUgZXhwb3NlZCB0cmFuc2Zvcm0gZnJvbSB2aXRlLCBpbnN0ZWFkIG9mIGRpcmVjdGx5XHJcbiAgICAgICAgLy8gdHJhbnNmb3JtaW5nIHdpdGggZXNidWlsZFxyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1XaXRoRXNidWlsZChjb2RlLCBpZCwge1xyXG4gICAgICAgICAgbG9hZGVyOiAnanN4JyxcclxuICAgICAgICAgIGpzeDogJ2F1dG9tYXRpYycsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZWFjdCgpLFxyXG4gIF0sXHJcblxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgZm9yY2U6IHRydWUsXHJcbiAgICBlc2J1aWxkT3B0aW9uczoge1xyXG4gICAgICBsb2FkZXI6IHtcclxuICAgICAgICAnLmpzJzogJ2pzeCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUyxTQUFTLGNBQWMsNEJBQTRCO0FBQ25WLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTSxVQUFVLE1BQU0sSUFBSTtBQUN4QixZQUFJLENBQUMsR0FBRyxNQUFNLGNBQWM7QUFBSSxpQkFBTztBQUl2QyxlQUFPLHFCQUFxQixNQUFNLElBQUk7QUFBQSxVQUNwQyxRQUFRO0FBQUEsVUFDUixLQUFLO0FBQUEsUUFDUCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
