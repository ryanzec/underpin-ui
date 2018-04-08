import React from 'react';

export const childCountExact = (children, expectedCount, identifier) => {
  const childCount = React.Children.count(children);

  if (childCount !== expectedCount) {
    throw new Error(`${identifier} expected ${expectedCount} children but got ${childCount}`);
  }
};

export const childCountRange = (children, minimumCount, maximumCount, identifier) => {
  const childCount = React.Children.count(children);

  if (childCount < minimumCount || childCount > maximumCount) {
    throw new Error(
      `${identifier} expected between ${minimumCount} and ${maximumCount} children but got ${childCount}`
    );
  }
};
