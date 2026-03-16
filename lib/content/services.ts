import { serviceBrands } from "@/lib/site";

import type { ServiceLandingPage } from "@/lib/content/types";

export const serviceLandingPages: ServiceLandingPage[] = [
  {
    slug: "refrigerator-repair-el-dorado-hills",
    title: "Refrigerator Repair",
    metaTitle: "Refrigerator Repair in El Dorado Hills | EDH Appliance Repair",
    metaDescription:
      "Local refrigerator repair in El Dorado Hills for cooling problems, leaks, ice maker issues, and temperature control failures. Call EDH Appliance Repair.",
    heroTitle: "Refrigerator repair in El Dorado Hills for cooling problems that cannot wait",
    heroDescription:
      "When the refrigerator or freezer stops holding temperature, starts leaking, or quits making ice, EDH Appliance Repair helps local homeowners move quickly from diagnosis to a clear repair plan.",
    intro:
      "Refrigerator repair calls are usually urgent because food loss, water leaks, and temperature swings can get expensive fast. This page is built to answer the questions El Dorado Hills homeowners have before they book, then point them straight to service.",
    problemSigns: [
      "Fresh-food section feels warm even though the controls are set correctly.",
      "Freezer has frost buildup, soft food, or a failed defrost cycle.",
      "Ice maker stops producing, jams, or leaks into the bin.",
      "The unit runs constantly, clicks repeatedly, or makes new noises.",
    ],
    commonRepairs: [
      "Temperature sensor, fan motor, and control board diagnosis.",
      "Defrost system troubleshooting for frost-heavy freezer sections.",
      "Ice maker, inlet valve, and water line repair for leak or fill issues.",
      "Door seal, airflow, and drain path inspection when cooling is inconsistent.",
    ],
    brands: [...serviceBrands],
    faq: [
      {
        question: "Can you work on both the refrigerator and freezer side?",
        answer:
          "Yes. We diagnose cooling, frost, airflow, ice maker, and defrost issues across side-by-side, top-freezer, bottom-freezer, and French-door units.",
      },
      {
        question: "Is same-day refrigerator service available?",
        answer:
          "Same-day or next-day appointments are often available when the schedule allows. The fastest route is to call, text, or submit the booking form with the symptoms and model information.",
      },
      {
        question: "Do you repair built-in or premium kitchen refrigerators?",
        answer:
          "We regularly work on major household brands, including premium units commonly installed in El Dorado Hills kitchens. If you have a specialty model, include the brand and model in the request so we can prepare properly.",
      },
    ],
    relatedCitySlugs: ["el-dorado-hills", "folsom", "cameron-park", "rescue"],
  },
  {
    slug: "washer-dryer-repair-el-dorado-hills",
    title: "Washer and Dryer Repair",
    metaTitle: "Washer and Dryer Repair in El Dorado Hills | EDH Appliance Repair",
    metaDescription:
      "Washer and dryer repair in El Dorado Hills for drain issues, no-heat dryers, vibration, long dry times, and control failures. Schedule local service.",
    heroTitle: "Washer and dryer repair in El Dorado Hills when laundry day stops cold",
    heroDescription:
      "From washers that will not drain to dryers that run without heat, EDH Appliance Repair helps homeowners restore the laundry routine with practical diagnostics and a clear next step.",
    intro:
      "Laundry appliances fail in ways that disrupt the entire week. This landing page targets the washer and dryer repair searches that usually signal high intent, then moves the visitor into a booking path with local proof and service details.",
    problemSigns: [
      "Washer will not drain, spin, fill, or unlock the door.",
      "Dryer runs but clothes still come out damp after a full cycle.",
      "The appliance shakes, squeals, thumps, or stops mid-cycle.",
      "Controls, sensors, or start buttons stop responding reliably.",
    ],
    commonRepairs: [
      "Drain pump, suspension, fill valve, and door lock diagnosis on washers.",
      "Heating element, igniter, sensor, and vent-related troubleshooting on dryers.",
      "Noise diagnosis for bearings, rollers, belts, and drum support issues.",
      "Control and error-code evaluation for newer electronic laundry units.",
    ],
    brands: [...serviceBrands],
    faq: [
      {
        question: "Do you work on both gas and electric dryers?",
        answer:
          "Yes. We diagnose no-heat, long dry-time, sensor, and noise issues on both gas and electric dryers.",
      },
      {
        question: "Can you diagnose front-load and top-load washers?",
        answer:
          "Yes. We service common drain, spin, vibration, door lock, and fill issues across both front-load and top-load washers.",
      },
      {
        question: "Should I include error codes in the request?",
        answer:
          "Yes. If the control panel is showing a code, include it in the issue description along with the brand and model. That usually speeds up the first-visit diagnosis.",
      },
    ],
    relatedCitySlugs: ["el-dorado-hills", "shingle-springs", "diamond-springs", "latrobe"],
  },
  {
    slug: "dishwasher-repair-el-dorado-hills",
    title: "Dishwasher Repair",
    metaTitle: "Dishwasher Repair in El Dorado Hills | EDH Appliance Repair",
    metaDescription:
      "Dishwasher repair in El Dorado Hills for drain failures, leaks, poor cleaning, soap issues, and drying problems. Book fast local service.",
    heroTitle: "Dishwasher repair in El Dorado Hills for leaks, drain problems, and poor cleaning",
    heroDescription:
      "A dishwasher that leaves standing water, leaks onto the floor, or stops cleaning properly can turn into a kitchen problem fast. EDH Appliance Repair handles the common failures homeowners call about most.",
    intro:
      "Dishwasher service searches are usually tied to an immediate kitchen headache. This page is designed to rank for those intent-rich terms while giving enough detail to build trust before the booking request.",
    problemSigns: [
      "The dishwasher does not drain fully and leaves water in the tub.",
      "Dishes come out cloudy, dirty, or still coated in detergent.",
      "The unit leaks near the door, underneath, or during the wash cycle.",
      "Drying performance drops and dishes stay wet after the cycle ends.",
    ],
    commonRepairs: [
      "Drain path, pump, filter, and disposal-connection troubleshooting.",
      "Spray arm, detergent, and circulation-related wash performance checks.",
      "Door seal, latch, and water flow diagnosis for leak issues.",
      "Heating and drying diagnostics when dishes stay wet after the cycle.",
    ],
    brands: [...serviceBrands],
    faq: [
      {
        question: "Do you repair dishwashers that still run but do not clean well?",
        answer:
          "Yes. Not every dishwasher problem is a total shutdown. We also diagnose poor cleaning, cloudy dishes, soap residue, and weak drying performance.",
      },
      {
        question: "Can you work on leak issues before they damage flooring?",
        answer:
          "Yes. If the dishwasher is leaking, mention where you see the water so we can prioritize the most likely causes during the visit.",
      },
      {
        question: "What brands do you service most often?",
        answer:
          "We regularly diagnose major household brands found in El Dorado Hills and nearby communities. Include the brand and model in the request so we can confirm the best prep before arrival.",
      },
    ],
    relatedCitySlugs: ["el-dorado-hills", "folsom", "cameron-park", "el-dorado"],
  },
  {
    slug: "oven-range-repair-el-dorado-hills",
    title: "Oven and Range Repair",
    metaTitle: "Oven and Range Repair in El Dorado Hills | EDH Appliance Repair",
    metaDescription:
      "Oven and range repair in El Dorado Hills for igniter failures, uneven heating, burner issues, and control problems. Local appliance repair from EDH Appliance Repair.",
    heroTitle: "Oven and range repair in El Dorado Hills for kitchens that need heat back fast",
    heroDescription:
      "Whether the oven stops heating evenly, a burner will not ignite, or the controls stop responding, EDH Appliance Repair helps restore the cooking appliances local families rely on every day.",
    intro:
      "Cooking appliance failures tend to hit right when the kitchen is busiest. This service page targets oven, range, and cooktop searches while explaining the most common symptoms and the booking path.",
    problemSigns: [
      "The oven takes too long to preheat or never reaches temperature.",
      "Bake or broil cycles stop heating consistently.",
      "Surface burners fail to ignite, stay weak, or heat unevenly.",
      "Control panels, clocks, or selector knobs stop working properly.",
    ],
    commonRepairs: [
      "Igniter, element, and temperature-sensor diagnosis for bake and broil issues.",
      "Burner and ignition troubleshooting on gas and electric cooking surfaces.",
      "Control and wiring evaluation when settings do not respond consistently.",
      "Full range diagnosis for combined oven and cooktop performance problems.",
    ],
    brands: [...serviceBrands],
    faq: [
      {
        question: "Do you repair both the oven cavity and the cooktop surface?",
        answer:
          "Yes. We handle combined range systems as well as separate ovens and cooking surfaces, including common burner, igniter, and control issues.",
      },
      {
        question: "Can you diagnose uneven baking or slow preheating?",
        answer:
          "Yes. Uneven heating and slow preheat are common service calls and usually point to specific heating, sensor, or control issues that can be inspected during the visit.",
      },
      {
        question: "Do you service electric and gas cooking appliances?",
        answer:
          "Yes. We regularly diagnose both electric and gas oven, range, and cooktop issues across major household brands.",
      },
    ],
    relatedCitySlugs: ["el-dorado-hills", "shingle-springs", "rescue", "folsom"],
  },
];

export const serviceLandingPagesBySlug = Object.fromEntries(
  serviceLandingPages.map((service) => [service.slug, service]),
) as Record<string, ServiceLandingPage>;

export function getPrimaryServiceSlug(serviceName: string) {
  const serviceGroups: Record<string, string> = {
    Refrigerator: "refrigerator-repair-el-dorado-hills",
    Freezer: "refrigerator-repair-el-dorado-hills",
    Washer: "washer-dryer-repair-el-dorado-hills",
    Dryer: "washer-dryer-repair-el-dorado-hills",
    Dishwasher: "dishwasher-repair-el-dorado-hills",
    Oven: "oven-range-repair-el-dorado-hills",
    Cooktop: "oven-range-repair-el-dorado-hills",
    Range: "oven-range-repair-el-dorado-hills",
    "Trash Compactor": "dishwasher-repair-el-dorado-hills",
    "Over-the-Range Microwave": "oven-range-repair-el-dorado-hills",
  };

  return serviceGroups[serviceName] ?? "refrigerator-repair-el-dorado-hills";
}
