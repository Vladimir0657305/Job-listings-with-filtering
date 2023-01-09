import Card from "./Card";
import { motion, AnimatePresence } from 'framer-motion';
import './Main.scss';
import dataArr from '../data.json';

export default function Main() {
    const { v4: uuidv4 } = require('uuid');

    return (
        <AnimatePresence initial={false}>
            <motion.div key={uuidv4()} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="main-block" >
                {
                    dataArr.map((item, ind) => <Card key={ind} items={item} />)
                }

            </motion.div>

        </AnimatePresence>
    );
}