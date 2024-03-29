import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, name, addTodo, input_content, input_category, todos_asc } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.main; __VLS_intrinsicElements.main;
__VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section; __VLS_intrinsicElements.section;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3; __VLS_intrinsicElements.h3;
__VLS_intrinsicElements.form; __VLS_intrinsicElements.form;
__VLS_intrinsicElements.h4; __VLS_intrinsicElements.h4; __VLS_intrinsicElements.h4; __VLS_intrinsicElements.h4;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
{
const __VLS_0 = __VLS_intrinsicElements["main"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("app"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("app"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["section"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("greeting"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("greeting"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["h2"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("title"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("title"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["input"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, type: ("text"), placeholder: ("Nome?"), value: ((__VLS_ctx.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, type: ("text"), placeholder: ("Nome?"), value: ((__VLS_ctx.name)), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
}
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_20 = __VLS_intrinsicElements["section"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("create-todo"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("create-todo"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["h3"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
(__VLS_28.slots!).default;
}
{
const __VLS_30 = __VLS_intrinsicElements["form"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
let __VLS_35 = { 'submit': __VLS_pickEvent(__VLS_34['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_32>).onSubmit) };
__VLS_35 = { submit: (__VLS_ctx.addTodo) };
{
const __VLS_36 = __VLS_intrinsicElements["h4"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
(__VLS_39.slots!).default;
}
{
const __VLS_41 = __VLS_intrinsicElements["input"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, type: ("text"), placeholder: ("es. Fare la spesa"), value: ((__VLS_ctx.input_content)), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, type: ("text"), placeholder: ("es. Fare la spesa"), value: ((__VLS_ctx.input_content)), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
}
{
const __VLS_46 = __VLS_intrinsicElements["h4"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
(__VLS_49.slots!).default;
}
{
const __VLS_51 = __VLS_intrinsicElements["div"];
const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
const __VLS_53 = __VLS_52({ ...{}, class: ("options"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, class: ("options"), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
{
const __VLS_56 = __VLS_intrinsicElements["label"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
{
const __VLS_61 = __VLS_intrinsicElements["input"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{}, type: ("radio"), name: ("category"), id: ("category1"), value: ("business"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), name: ("category"), id: ("category1"), value: ("business"), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
(__VLS_ctx.input_category);
}
{
const __VLS_66 = __VLS_intrinsicElements["span"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{}, class: ("bubble business"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, class: ("bubble business"), });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
}
{
const __VLS_71 = __VLS_intrinsicElements["div"];
const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
const __VLS_73 = __VLS_72({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
(__VLS_74.slots!).default;
}
(__VLS_59.slots!).default;
}
{
const __VLS_76 = __VLS_intrinsicElements["label"];
const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
const __VLS_78 = __VLS_77({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
{
const __VLS_81 = __VLS_intrinsicElements["input"];
const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
const __VLS_83 = __VLS_82({ ...{}, type: ("radio"), name: ("category"), id: ("category2"), value: ("personal"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_83> & Record<string, unknown>) => void)({ ...{}, type: ("radio"), name: ("category"), id: ("category2"), value: ("personal"), });
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
let __VLS_85!: __VLS_NormalizeEmits<typeof __VLS_84.emit>;
(__VLS_ctx.input_category);
}
{
const __VLS_86 = __VLS_intrinsicElements["span"];
const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
const __VLS_88 = __VLS_87({ ...{}, class: ("bubble personal"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{}, class: ("bubble personal"), });
const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
let __VLS_90!: __VLS_NormalizeEmits<typeof __VLS_89.emit>;
}
{
const __VLS_91 = __VLS_intrinsicElements["div"];
const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
const __VLS_93 = __VLS_92({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_92));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_93> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93)!;
let __VLS_95!: __VLS_NormalizeEmits<typeof __VLS_94.emit>;
(__VLS_94.slots!).default;
}
(__VLS_79.slots!).default;
}
(__VLS_54.slots!).default;
}
{
const __VLS_96 = __VLS_intrinsicElements["input"];
const __VLS_97 = __VLS_elementAsFunctionalComponent(__VLS_96);
const __VLS_98 = __VLS_97({ ...{}, type: ("submit"), value: ("Add todo"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_96, typeof __VLS_98> & Record<string, unknown>) => void)({ ...{}, type: ("submit"), value: ("Add todo"), });
const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98)!;
let __VLS_100!: __VLS_NormalizeEmits<typeof __VLS_99.emit>;
}
(__VLS_33.slots!).default;
}
(__VLS_23.slots!).default;
}
{
const __VLS_101 = __VLS_intrinsicElements["h3"];
const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
const __VLS_103 = __VLS_102({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_102));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_101, typeof __VLS_103> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103)!;
let __VLS_105!: __VLS_NormalizeEmits<typeof __VLS_104.emit>;
(__VLS_104.slots!).default;
}
{
const __VLS_106 = __VLS_intrinsicElements["div"];
const __VLS_107 = __VLS_elementAsFunctionalComponent(__VLS_106);
const __VLS_108 = __VLS_107({ ...{}, class: ("list"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_106, typeof __VLS_108> & Record<string, unknown>) => void)({ ...{}, class: ("list"), });
const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108)!;
let __VLS_110!: __VLS_NormalizeEmits<typeof __VLS_109.emit>;
for (const [todo] of __VLS_getVForSourceType((__VLS_ctx.todos_asc)!)) {
{
const __VLS_111 = __VLS_intrinsicElements["div"];
const __VLS_112 = __VLS_elementAsFunctionalComponent(__VLS_111);
const __VLS_113 = __VLS_112({ ...{}, class: ((`todo-item ${todo.done && 'done'}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_111, typeof __VLS_113> & Record<string, unknown>) => void)({ ...{}, class: ((`todo-item ${todo.done && 'done'}`)), });
const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113)!;
let __VLS_115!: __VLS_NormalizeEmits<typeof __VLS_114.emit>;
{
const __VLS_116 = __VLS_intrinsicElements["label"];
const __VLS_117 = __VLS_elementAsFunctionalComponent(__VLS_116);
const __VLS_118 = __VLS_117({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_117));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_116, typeof __VLS_118> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118)!;
let __VLS_120!: __VLS_NormalizeEmits<typeof __VLS_119.emit>;
{
const __VLS_121 = __VLS_intrinsicElements["input"];
const __VLS_122 = __VLS_elementAsFunctionalComponent(__VLS_121);
const __VLS_123 = __VLS_122({ ...{}, type: ("checkbox"), }, ...__VLS_functionalComponentArgsRest(__VLS_122));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_121, typeof __VLS_123> & Record<string, unknown>) => void)({ ...{}, type: ("checkbox"), });
const __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123)!;
let __VLS_125!: __VLS_NormalizeEmits<typeof __VLS_124.emit>;
(todo.done);
}
{
const __VLS_126 = __VLS_intrinsicElements["span"];
const __VLS_127 = __VLS_elementAsFunctionalComponent(__VLS_126);
const __VLS_128 = __VLS_127({ ...{}, class: ((`bubble ${todo.category}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_126, typeof __VLS_128> & Record<string, unknown>) => void)({ ...{}, class: ((`bubble ${todo.category}`)), });
const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128)!;
let __VLS_130!: __VLS_NormalizeEmits<typeof __VLS_129.emit>;
}
(__VLS_119.slots!).default;
}
{
const __VLS_131 = __VLS_intrinsicElements["div"];
const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
const __VLS_133 = __VLS_132({ ...{}, class: ("todo-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_132));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_131, typeof __VLS_133> & Record<string, unknown>) => void)({ ...{}, class: ("todo-content"), });
const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133)!;
let __VLS_135!: __VLS_NormalizeEmits<typeof __VLS_134.emit>;
{
const __VLS_136 = __VLS_intrinsicElements["input"];
const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
const __VLS_138 = __VLS_137({ ...{}, type: ("text"), value: ((todo.content)), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_136, typeof __VLS_138> & Record<string, unknown>) => void)({ ...{}, type: ("text"), value: ((todo.content)), });
const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138)!;
let __VLS_140!: __VLS_NormalizeEmits<typeof __VLS_139.emit>;
}
(__VLS_134.slots!).default;
}
(__VLS_114.slots!).default;
}
// @ts-ignore
[name, name, addTodo, input_content, input_content, input_category, input_category, todos_asc,];
}
(__VLS_109.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
