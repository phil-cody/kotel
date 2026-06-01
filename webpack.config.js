import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Certificate } from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: {
    home: "./src/pages/home/home.js",
    prices: "./src/pages/prices/prices.js",
    certificate: "./src/pages/certificate/certificate.js",
    contacts: "./src/pages/contacts/contacts.js",
    privacy: "./src/pages/privacy/privacy.js"
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
      template: "./src/pages/prices/prices.html",
      filename: "pages/prices/prices.html",
      chunks: ["prices"],
    }),
    new MiniCssExtractPlugin({
      filename: "style/style.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/certificate/certificate.html",
      filename: "pages/certificate/certificate.html",
      chunks: ["certificate"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contacts/contacts.html",
      filename: "pages/contacts/contacts.html",
      chunks: ["contacts"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/privacy/privacy.html",
      filename: "pages/privacy/privacy.html",
      chunks: ["privacy"],
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