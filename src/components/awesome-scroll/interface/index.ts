import React from "react";

/** 滚动容器属性接口 */
export type AwesomeScrollProps = {
	/** 滚动速度(通过控制每一次动画滚动的距离控制速度，所以实际上speed是一个滚动距离间隔上的控制) */
	speed: number;
	/** 是否禁用自动循环滚动（默认开启不禁用） */
	disabled: boolean;
	/**
	 * 启用来回往复模式
	 * @description 默认单向由上而下的滚动模式，滚到底部瞬间回到顶部再循环，该模式是滚动底部后再自下而上的往回滚动，自此循环往复
	 */
	reciprocatingMode: boolean;
	/** 滚动条宽度 */
	scrollBarWidth: number;
	/** 滚动条颜色 */
	scrollBarColor: string;
} & ICSSProps;

/** 样式props */
export interface ICSSProps {
	/** html id name */
	id?: string;
	/** html class name */
	className?: React.HTMLAttributes<HTMLDivElement>['className'];
	/** 样式 */
	style?: React.CSSProperties;
}

export interface BasicProps {}

export interface Basic<P extends BasicProps = BasicProps, S = {}, SS = any>
	extends React.PureComponent<P, S, SS> {}

/**
 * css接口，命名为ICSS是为了避免与系统重名
 * @interface ICSS
 * @extends {Basic<T, S, SS>}
 * @template T
 * @template S
 * @template SS
 */
export interface ICSS<T extends ICSSProps = ICSSProps, S = {}, SS = any>
	extends Basic<T, S, SS> {}

type DOMHighResTimeStamp = number;

export interface FrameRequestCallback {
	(time: DOMHighResTimeStamp): void;
}
