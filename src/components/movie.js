/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Movie(props) {

  return(
    <div className="movie-item-style-2">
      <img src={props.img} alt="" />
      <div className="mv-item-infor">
        <h6><a href="moviesingle.html">{props.title} <span>({props.year})</span></a></h6>
        <p className="rate"><i className="ion-android-star"></i><span>{props.rate}</span> /10</p>
        <p className="describe">{props.children}</p>
        <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
        <p>Director: <a href="#">{props.director}</a><a href="#">{props.director2}</a></p>
        <p>Stars: <a href="#">{props.actor1}</a> <a href="#"> {props.actor2}</a> <a href="#">  {props.actor3}</a></p>
      </div>
    </div>
  );
}