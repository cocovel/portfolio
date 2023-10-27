'use strict';

// implementation plan
// 1. Bring all section elements and menu items (queyrselector)
// 2. Observe all sections using IntersectionObserver
// 3. Activate a menu item which belongs to the section observed
// section being observed: 
// - If several sections are observed, the first section is selected.
// - If the contact section is observed, the last section is selected.

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonial', '#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false);

const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach(section => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach(entry => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.99;
  });
  console.log(visibleSections);
  console.log('무조건 라스트 섹션', selectLastOne);

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
  console.log(sectionIds[navIndex]);

  function findFirstIntersecting(intersections) {
    const index = intersections.indexOf(true);
    return index > 0 ? index : 0

  }
}



