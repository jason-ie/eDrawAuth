// pages/index.js
import Link from 'next/link';
import { useEdrawData } from '../src/app/utils/EdrawDataContext';
import './notices.css';
import {
    Box,
    Container,
    Grid,
    Button,
} from '../src/app/components/muiComponents';
import { splitAndHighlightMultiple } from '../src/app/utils/EdrawDataContext';

export default function Notices() {



    return (
        <>
            <div className="  sm:py-32 ">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-center ">Notices</h1>

                    <div className=" grid-cols-12 container grey-bg rounded-[30px] shadow-lg mt-16  ">
                        <h3 className='mb-4 red-text'>e-Draw Software - Notice File</h3>
                        <p>
                            This software, e-Draw, developed by enLabel Global Services, Inc., includes proprietary modules and certain open-source components, which are incorporated and utilized under their respective licenses. This file provides the necessary attributions and disclosures required by those licenses, as well as documentation of modifications made by enLabel Global Services, Inc., if applicable.
                        </p>
                        <hr class=" border-gray my-8 w-full" />
                        <h3 className='mb-4 red-text'>1. Proprietary Components</h3>
                        <p>
                            This software, e-Draw, developed by enLabel Global Services, Inc., includes proprietary modules and certain open-source components, which are incorporated and utilized under their respective licenses. This file provides the necessary attributions and disclosures required by those licenses, as well as documentation of modifications made by enLabel Global Services, Inc., if applicable.
                        </p>
                        <h3 className='mb-4 mt-4 red-text '>2. Open-Source Components and Compliance</h3>
                        <p>
                            e-Draw includes open-source components listed in detail in the LICENSE.txt file, which provides specific information regarding each component, its license type, and any modifications made by enLabel Global Services, Inc. Please refer to the LICENSE.txt for the full list of open-source components and their respective licenses.

                            Licensor provides these open-source components on an "as-is" basis, without any warranty beyond what is provided by the original open-source license. Licensee agrees to comply with each applicable open-source license requirement for each component used within the Software.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
