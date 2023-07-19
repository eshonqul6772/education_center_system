import React from 'react';
import cx from "classnames";
import ReactPaginate from "react-paginate";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import classes from './Pagination.module.scss';

const Pagination = ({ total, current, onChange }) => (
   <ReactPaginate
      breakLabel="..."
      pageCount={total}
      pageRangeDisplayed={3}
      forcePage={current - 1}
      onPageChange={({ selected }) => onChange(selected + 1)}
      nextLabel={<MdOutlineKeyboardArrowRight size={24} />}
      previousLabel={<MdOutlineKeyboardArrowLeft size={24} />}
      containerClassName={classes.wrapper}
      pageClassName={classes.item}
      pageLinkClassName={classes.itemLink}
      activeClassName={classes.itemActive}
      activeLinkClassName={classes.itemActiveLink}
      previousClassName={cx(classes.item, classes.itemPrev)}
      previousLinkClassName={cx(classes.itemLink, classes.itemPrevLink)}
      nextClassName={cx(classes.item, classes.itemNext)}
      nextLinkClassName={cx(classes.itemLink, classes.itemNextLink)}
      disabledClassName={classes.itemDisabled}
   />
)

export default Pagination;