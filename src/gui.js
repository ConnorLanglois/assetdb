'use strict';

class Gui {
	constructor (text, onclick) {
		this.text = text;
		this.onclick = onclick;

		this.button = document.createElement('button');
		this.button.type = 'button';
		this.button.textContent = this.text;
		this.button.onclick = this.onclick;

		this.textarea = document.createElement('textarea');
		this.textarea.readOnly = true;
		this.textarea.style.position = 'absolute';
		this.textarea.style.width = '150px';
		this.textarea.style.height = '15px';
	}

	show() {
		const tr = document.getElementsByClassName('ms-webpartpagedescription')[0];

		tr.append(this.button);
		tr.append(document.createTextNode('\u00A0'));
		tr.append(this.textarea);

		Gui.current = this;
	}
	
	log(...texts) {
		this.textarea.value += this.textarea.value !== '' ? '\n' : '';

		for (const text of texts) {
			this.textarea.value += text + ' ';
		}

		this.textarea.scrollTop = this.textarea.scrollHeight;
	}

	clear() {
		this.textarea.value = '';
	}

	static getCurrent() {
		return Gui.current;
	}
}

Gui.current = null;
