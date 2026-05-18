import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: {
    home: "./src/pages/home/home.js",
    about: "./src/pages/about/about.js",
    brands: "./src/pages/brands/brands.js",
    prices: "./src/pages/prices/prices.js",
  },
  output: {
    filename: "pages/[name]/[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 4000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/home/home.html",
      filename: "pages/home/home.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about/about.html",
      filename: "pages/about/about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/brands/brands.html",
      filename: "pages/brands/brands.html",
      chunks: ["brands"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/prices/prices.html",
      filename: "pages/prices/prices.html",
      chunks: ["prices"],
    }),
    new MiniCssExtractPlugin({
      filename: "style/style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(sass|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: 'img/[name].[hash][ext]'
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: 'fonts/[name].[hash][ext]'
        }
      },
    ],
  },
}