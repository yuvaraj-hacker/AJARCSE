
            import React, { useEffect, useRef } from 'react'
            import Dash from '../Side/Dash';
import { GrDocumentZip } from 'react-icons/gr';
            function Aboutus() {
              const imageRef = useRef(null);
              const containerRef = useRef(null);
              useEffect(() => {
                const handleScroll = () => {
                  let value = window.scrollY;
                  const container = containerRef.current;
                  if (imageRef.current && container) {
                    const containerRect = container.getBoundingClientRect();
                    // Only apply the scroll effect when the container is in view
                    if (containerRect.top >= 0 && containerRect.bottom <= window.innerHeight) {
                      imageRef.current.style.marginTop = `${value * 9.5}px`;
                    }
                  }
                };
                window.addEventListener("scroll", handleScroll);
                // Cleanup function to remove the event listener
                return () => {
                  window.removeEventListener("scroll", handleScroll);
                };
              }, []);
              return (
                <>
                  <section className="max-w-[96rem] mx-auto">
                    <section className="grid grid-cols-6 gap-5">
                      <section className="lg:col-span-5 col-span-6 ">
                        <section className="">
                          <div class="  bg-[url('/images/Herosection/Frame.png')] lg:h-96 md:h-[450px] h-52 bg-cover bg-center overflow-hidden" ref={containerRef}>
                            <div className="max-w-[80rem] mx-auto">
                              <div className="grid grid-cols-2   items-center">
                                <p className="ml-auto text-white md:text-4xl text-lg">
                                 Author Guidelines
                                </p>
                                <div className="flex justify-center">
                                  <img ref={imageRef} className="w-96" id="image" src="/images/Herosection/9289258.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  py-5">
                            <div className="lg:flex md:flex ">
                              <div className="max-w-full w-full ">
                                <div className="border p-2 rounded-sm border-gray-100 bg-white">
                                  <h1 className="text-black border w-fit p-2 bg-[#C0DBF8] md:text-3xl text-lg  ">
                                   Author Guidelines
                                  </h1>
                                  
            <div className="max-w-full w-full ">
        
              <p className="py-5 mt-3 text-justify">
                IJDIII are peer-reviewed, community-driven research journals
                covering the latest specialist topics at the emerging
                intersections of IT and other fields. A general guide for how to
                prepare your text and graphics for an article to be included in
                EAI Endorsed Transactions. Submitted papers are reviewed by the
                IJDIII Editorial Board & Reviewers.
              </p>
              <h3 className="font-semibold mb-2">
                <i>Requirements for publishing in</i> IJDIII:
              </h3>
              <ul className="list-disc list-outside pl-5  text-justify">

                <li className="">
                  The articles must be written by the correct IJDIII
                  <a
                    href="/documents/"
                    target="blank"
                    className="text-[#4b2d8b] underline inline-flex ml-1 gap-1 items-center"
                  > {''} template < GrDocumentZip className="text-lg" /></a>
                </li>
                <li>
                  Researchers should adhere to publication requirements that
                  submitted work is original, is not plagiarized, and has not
                  been published elsewhere.
                </li>
                <li>
                  The abstract must be between 200 and 1000 characters long. We
                  recommend that it be prepared in a structured way according to
                  the PubMed's format.
                </li>
                <li>
                  Three to eight keywords representing the main content of the
                  article are required.
                </li>
                <li>
                  Please ensure that the used reference style is Vancouver; if
                  the references are not in the correct style, they may need to
                  be retyped and carefully proofread. You can find it in the
                  IJDIII templates.
                </li>
                <li>
                  The articles have to be written in formal English,
                  'spell-checked', and 'grammar checked'.
                </li>
                <li>
                  Only articles and abstracts that have been published or are in
                  press or are available through public e-print/preprint
                  servers, may be cited.
                </li>
                <li>
                  All references mentioned in the Reference List are cited in
                  the text, and vice versa.
                </li>
                <li>Figures and tables need to be of readable quality.</li>
                <li>
                  Permission has been obtained for use of copyrighted material
                  from other sources (including the Internet).
                </li>
                <li>
                  The paper must be submitted through the
                  <a
                    href="https://IJDIII.com/aritms/index.php/IJDIII/about/submissions"
                    className="text-[#4b2d8b] underline whitespace-nowrap"
                  >
                    {" "}
                    Open Journal System
                  </a>
                </li>
              </ul>
              <h3 className="font-semibold mt-5 mb-2">
                <i>To submit a paper via OJS you will need:</i>{" "}
              </h3>
              <ul className=" list-outside pl-5  list-disc text-justify mb-5">

                <li>
                  Your manuscript in the OpenOffice, Microsoft Word, or RTF
                  document file format.
                </li>

                <li>
                  The manuscript should be prepared according to the guidelines
                  and requirements. For more information, please write to
                  <a
                    href="mailto:editor@IJDIII.com"
                    className="text-[#4b2d8b] underline  "
                  >
                    {" "}
                    editor@IJDIII.com.
                  </a>
                </li>
              </ul>
              <a
                href="https://IJDIII.com/aritms/index.php/IJDIII/submission/wizard"
                className="text-[#4b2d8b] underline underline-offset-1 hover:underline-offset-4 hover:text-blue-500 duration-200 pt-5"
              >
                Submit a paper via OJS
              </a>
              <h1 className="text-xl font-semibold mb-2  mt-5">Article types</h1>

              <ul className="  list-outside pl-5 list-disc text-justify">

                <li>
                  Research article: Articles (4000-8000 words) that report
                  original research and which present objective, questions,
                  methods, results, discussions, and conclusions.
                </li>
                <li>
                  Review article: In-depth review articles (4000-8000 words) on
                  topics that build upon comprehensive references to the
                  published literature. These articles are meant to offer
                  relevant concepts, frameworks, theoretical proposals and
                  limitations in the topic covered.
                </li>
                <li>
                  Commentary: Commentary pieces and columns are short articles
                  (typically up to 1000 words) that reflect the opinion of the
                  author(s) on a topic of interest, written for a broad
                  audience. These may be stand-alone pieces or part of a regular
                  series.
                </li>
                <li>
                  Editorial: These are written by the editor(s) or invited
                  researchers (1000-2000 words) to discuss broader issues
                  related to the articles published in the issue, the journal or
                  certain topics relevant to the journal.
                </li>
                <li>
                  Technical Article: Technical articles are original reports on
                  specialist technical work, written for a professional
                  audience. There are no minimum or maximum length constraints,
                  but articles should be long enough to clearly explain the work
                  carried out, while not of an excessive length that distorts
                  rather than increases understanding.
                </li>
                <li>
                  Short communications: Short articles (1000-2500 words)
                  containing original research pieces. They should not be
                  preliminary reports or contain purely incremental data and
                  should be of significance and broad interest to the journal's
                  research community.
                </li>
              </ul>

              <h1 className="text-xl font-semibold  mt-5 mb-2">
                Benefits of IJDIII
              </h1>
              <h3 className="font-semibold mb-2">Open Access</h3>
              <ul className=" list-outside pl-5 list-disc text-justify">
                <li>
                  All articles in the IJDIII journal is an Open Access (OA).
                </li>
                <li>
                  Authors can copy, redistribute, remix, transform, and build
                  upon the material since all the papers are published under a
                  Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                  International (CC BY-NC-SA 4.0) license.
                </li>
                <li>
                  Community standards, rather than copyright law, will continue
                  to provide the mechanism for enforcement of proper attribution
                  and responsible use of the published work.
                </li>
              </ul>
              <h3 className="font-semibold mt-5 mb-2">
                Rigorous review process
              </h3>
              <p className="text-justify">
                Submitted papers are double-blind reviewed. The thoroughly
                transparent review process increases review quality by
                simultaneously evaluating the performance of reviewers and the
                impact and exploitation potential of the published article.
              </p>
            </div>

      
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </section>
                      <section className="col-span-1mx-auto h-fit p-2 space-y-3 lg:block hidden">
                        <Dash />
                      </section>
                    </section>
                  </section>
                </>
              )
            }
            export default Aboutus