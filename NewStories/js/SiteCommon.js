﻿/************************************************************************* 
 * TopNav.js - Top level navigation code for website
 * ver 1.0
 * This javascript file is a single source of navigation code on all
 * top level pages in www.lcs3.syr.edu/faculty/fawcett
 *
 * Jim Fawcett, Syracuse University, 07 Aug 2011
 *************************************************************************/

$(document).ready(function () {
  $("#nav").html(
   "<hr class='menubegin' />\
    <div class='container'>\
      <ul id='menu'>\
        <li><a href='#'>Home</a>\
          <ul class='active'>\
            <li><a href='FawcettHome.htm'>Home</a></li>\
            <li><a href='sitemap.htm'>Site Map</a></li>\
            <li><a href='#'></a></li>\
          </ul>\
        </li>\
        <li><a href='#'>Courses</a>\
          <ul class='active'>\
            <li><a href='Courses.htm'>Courses</a></li>\
            <li><a href='CSE681.htm'>CSE681-SMA</a></li>\
            <li><a href='CSE686.htm'>CSE686-IP</a></li>\
            <li><a href='CSE687.htm'>CSE687-OOD</a></li>\
            <li><a href='CSE775.htm'>CSE775-DO</a></li>\
            <li><a href='CSE776.htm'>CSE776-DP</a></li>\
            <li><a href='CSE784.htm'>CSE784-SS</a></li>\
            <li><a href='code.htm'>Sample Code</a></li>\
            <li><a href='OfficeHours.htm'>Office Hours</a></li>\
            <li><a href='Courses.htm'>Program Plan</a></li>\
            <li><a href='SoftwareTrack.htm'>SW Track</a></li>\
            <li><a href='#'></a></li>\
          </ul>\
        </li>\
        <li><a href='#'>Core Tech</a>\
          <ul class='active'>\
            <li><a href='CoreTechnologies.htm'>Core Tech</a></li>\
            <li><a href='../coretechnologies/Cpp.htm'>C++</a></li>\
            <li><a href='../coretechnologies/Cpp.htm'>C++/CLI</a></li>\
            <li><a href='../coretechnologies/CSharp.htm'>C#, .Net</a></li>\
            <li><a href='../coretechnologies/Sockets.htm'>Network Prog</a></li>\
            <li><a href='../coretechnologies/ThreadsAndSynch.htm'>Threads</a></li>\
            <li><a href='../coretechnologies/Win32SystemProgramming.htm'>Win32 Sys</a></li>\
            <li><a href='../coretechnologies/WindowsProgramming.htm'>Win GUI</a></li>\
            <li><a href='../coretechnologies/XML.htm'>XML</a></li>\
            <li><a href='#'></a></li>\
          </ul>\
        </li>\
        <li><a href='#'>Directories</a>\
          <ul class='active'>\
            <li><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts'>Handouts</a></li>\
            <li><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/CoreTechnologies'>CoreTech</a></li>\
            <li><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/CSE681'>CSE681-SMA</a></li>\
            <li><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/CSE686'>CSE686-IP</a></li>\
            <li><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/CSE687'>CSE687-OOD</a></li>\
            <li><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/CSE775'>CSE775-DO</a></li>\
            <li><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/CSE776'>CSE776-DP</a></li>\
            <li><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/CSE784'>CSE784-SS</a></li>\
            <li><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/SummerProjects'>Summer Proj</a></li>\
            <li><a href='#'></a></li>\
          </ul>\
        </li>\
        <li><a href='Notices.htm'>Notices</a></li>\
        <li><a href='#'>Research</a>\
          <ul class='active'>\
            <li><a href='Research.htm'>Research</a>\
            <li><a href='ResearchStatement.htm'>Resrch Stmt</a>\
            <li><a href='ResearchCode.htm'>Resrch Code</a>\
            <li><a href='SWMatrixCrossPlatformDev.htm'>V.Appadurai</a>\
            <li><a href='SoftwareMatrix.htm'>R.Ghosh</a>\
            <li><a href='VoiceActivatedRecording.htm'>J.Goddard</a>\
            <li><a href='../Research/MuratsResearch/MuratsDefense/StructuralModelsForLargeSoftwareSystems.htm'>M.Gungor</a>\
            <li><a href='../Research/kaya/MehmetKaya.htm'>M.Kaya</a>\
            <li><a href='AspectOrientedProgramming.htm'>R.Krishnan-Chittur</a>\
            <li><a href='SelfHealingSoftwareMatrix.htm'>A.Krishna</a>\
            <li><a href='SWMatrixModelDrivenDev.htm'>T.Patel</a>\
            <li><a href='ComputingWithGPUs.htm'>P.Pratt-Szeliga</a>\
            <li><a href='SoftwareRestructuring.htm'>S.Singh</a>\
            <li><a href='EnhancedDebuggingThruVirtualization.htm'>R.Wilson</a>\
          </ul>\
        </li>\
        <li><a href='#'>Us</a>\
          <ul class='active'>\
            <li><a href='gradOrientation.htm'>Orientation</a></li>\
            <li><a href='studentPictures.htm'>Student Pics</a></li>\
            <li><a href='StudentCultures.htm'>Student Cult</a></li>\
            <li><a href='Graduates.htm'>Graduates</a></li>\
            <li><a href='Interviews.htm'>Interviews</a></li>\
            <li><a href='#'></a></li>\
          </ul>\
        </li>\
        <li><a href='#'>Site Links</a>\
          <ul class='active'>\
            <li><a href='SiteMap.htm'>Site Map</a></li>\
            <li><a href='SiteDesign.htm'>Site Design</a></li>\
            <li><a href='TechnicalLinks.htm'>Tech Links</a></li>\
            <li><a href='Books.htm'>Books</a></li>\
            <li><a href='Articles.htm'>Articles</a></li>\
            <li><a href='Mathematics.htm'>Math</a></li>\
            <li><a href='BrownBagSeminar.htm'>Seminars</a></li>\
            <li><a href='../SummerProjects'>Summer Proj</a></li>\
            <li><a href='SWDev.htm'>SW Dev</a></li>\
            <li><a href='WebDev.htm'>Web Dev</a></li>\
            <li><a href='TestPage.htm'>Test HTML5</a></li>\
            <li><a href='TLPT.htm'>Pg Template</a></li>\
            <li><a href='OtherLinks.htm'>Other Links</a></li>\
            <li><a href='#'></a></li>\
          </ul>\
        </li>\
        <li><a href='Projects.htm'>Projects</a></li>\
        <li><a href='Blog.htm'>Blog</a></li>\
      </ul>\
    </div>\
    <hr class='menuend' />"
  );
});
