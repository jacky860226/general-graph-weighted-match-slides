# General graph weighted matching algorithm slides
這是一份用來介紹各種匹配算法的投影片，從基礎的**匈牙利算法**開始，推廣到通用的**一般圖最大權匹配算法**，來達到教學的目的。本投影片製作目的為2016新竹高中暑期演算法競賽作為上課投影片使用，之後在其他需要介紹匹配算法的場合也可以使用。若有人想使用我的投影片進行教學，只要註明說這是我寫的即可。若有人認為投影片寫得不清楚或不好，歡迎自行修改後給我pull request。最後特別感謝[vfleaking的這份code](http://vfleaking.blog.uoj.ac/blog/339 "vfleaking的code")，我對他**一般圖最大權匹配**的code進行優化及修改完成了我現在這份code。

以下為這份投影片的大綱

## 匹配
* 匹配
* 最大匹配
* 完美匹配
* 最大權匹配
* 最大權最大匹配
* 最大權完美匹配

## 用 最大權最大匹配算法 求 最大權匹配

## 用 最大權匹配算法 求 最大權最大匹配

## 最大匹配算法

### 二分圖最大匹配(Hungarian algorithm)
* Flow-網路流算法
* 匈牙利算法預備知識
* Berge's Theorem
  - 證明正確性
* 匈牙利算法及c++ code

### 一般圖最大匹配(Blossom algorithm)
* 花的概念
* 實作細節
  - BFS
  - 紀錄花的方法
  - 可能增廣的邊
* c++ code

## 最大權匹配算法

### 二分圖最大權匹配(Kuhn-Munkres algorithm)
* 預備知識
  - 線性規劃的對偶問題
  - 二分圖最大權完美匹配的線性規劃
  - 二分圖最大權完美匹配的對偶問題
* 調整 vertex labeling
* KM演算法及c++ code

### 一般圖最大權匹配(Edmonds' Maximum Weight Matching Algorithm)
* 預備知識
  - 花
  - 一般圖最大權完美匹配的線性規劃
  - 一般圖最大權完美匹配的對偶問題
  - 處理花的問題
* 算法的四個部分
  - GROW
  - AUGMENT
  - SHRINK
  - EXPAND
* 調整 vertex labeling
* 做一般圖最大權匹配的方法
* c++ code

Copyright (C) 2016 黃兆源
