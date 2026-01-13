'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FAQItem {
  question: string;
  answer: string;
  id?: string;
}

export interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  defaultOpen?: number[];
  allowMultipleOpen?: boolean;
}

export function FAQ({
  items,
  title = 'Frequently Asked Questions',
  description = 'Join Alkhidmat’s volunteer movement and unlock opportunities for service, learning, and recognition',
  className = '',
  itemClassName = '',
  titleClassName = '',
  defaultOpen = [],
  allowMultipleOpen = false,
}: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>(defaultOpen);

  const toggleItem = (index: number) => {
    const nextIndex = index - 1;
    const prevIndex = index + 1;

    if (allowMultipleOpen) {
      setOpenItems(prev => {
        const toggled = prev.includes(index)
          ? prev.filter(item => item !== index)
          : [...prev, index];

        if (index % 2 === 1 && nextIndex < items.length) {
          return toggled.includes(nextIndex)
            ? toggled.filter(item => item !== nextIndex)
            : [...toggled, nextIndex];
        } else if (index % 2 === 0 && prevIndex >= 0) {
          return toggled.includes(prevIndex)
            ? toggled.filter(item => item !== prevIndex)
            : [...toggled, prevIndex];
        }
        return toggled;
      });
    } else {
      setOpenItems(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn("text-5xl font-bold text-center mb-3 font-avenir text-gray-900 dark:text-gray-100", titleClassName)}
          >
            {title}
          </motion.h2>
        )}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-[18px] text-[#7A7A7A] dark:text-gray-400 font-avenir mb-12"
          >
            {description}
          </motion.p>
        )}


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id || index}
              variants={itemVariants}
              className={cn("bg-[#F6F6F6] dark:bg-zinc-900 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-800 overflow-hidden", itemClassName)}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors duration-200"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openItems.includes(index) && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: 'easeInOut' },
                      opacity: { duration: 0.2, ease: 'easeInOut' },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-2">
                      <p className="text-[#7A7A7A] dark:text-gray-400 font-avenir leading-relaxed ">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
