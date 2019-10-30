/*
 * @Descripttion: driver.js的路径
 * @version:
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2019-10-30 19:23:37
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2019-10-30 19:23:59
 */
const steps = [
  {
    element: '#myicon',
    popover: {
      title: 'Hamburger',
      description: 'Open && Close sidebar',
      position: 'bottom',
    },
  },
  {
    element: '#screen',
    popover: {
      title: 'Breadcrumb',
      description: 'Indicate the current page location',
      position: 'bottom',
    },
  },
  // {
  //   element: '#header-search',
  //   popover: {
  //     title: 'Page Search',
  //     description: 'Page search, quick navigation',
  //     position: 'left'
  //   }
  // },
  // {
  //   element: '#screenfull',
  //   popover: {
  //     title: 'Screenfull',
  //     description: 'Set the page into fullscreen',
  //     position: 'left'
  //   }
  // },
  // {
  //   element: '#size-select',
  //   popover: {
  //     title: 'Switch Size',
  //     description: 'Switch the system size',
  //     position: 'left'
  //   }
  // },
  // {
  //   element: '#tags-view-container',
  //   popover: {
  //     title: 'Tags view',
  //     description: 'The history of the page you visited',
  //     position: 'bottom'
  //   },
  //   padding: 0
  // }
];

export default steps;
